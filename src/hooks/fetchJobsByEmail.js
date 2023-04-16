
import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { Spin, Alert } from "antd";
import { useSession } from "next-auth/react";

export default function fetcherJobsByEmail() {

    const { data: session } = useSession();


    const fetcherJobsByEmail = async () => await (await (await fetch(process.env.NEXT_PUBLIC_API_BACKEND + '/v1/vacancies/' + session.user.email, {
        headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer ' + session.accessToken
        }

    })).json())

    const { data, isLoading, isFetching, isError } = useQuery('vacancies', fetcherJobsByEmail);

    if (isError) return (
        <Alert
            message="Erro ao carregar as informações!"
            description="Entre em contato com o administrador do sistema."
            type="error"
        />
    )

    if (isFetching) return (
        <Spin tip="Loading...">
            <Alert
                message="Aguarde!"
                description="Estamos preparando tudo para você."
                type="info"
            />
        </Spin>
    )

    return (
        data
    )

}

export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery('vacancies', fetcherJobsByEmail);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}