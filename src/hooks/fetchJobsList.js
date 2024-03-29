import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { Spin, Alert} from "antd";

export default function fetchJobsList(){

    const fetcherJobs = async () => await(await (await fetch(process.env.NEXT_PUBLIC_API_BACKEND+'/v1/vacancies/actives')).json())

    const { data, isLoading, isFetching, isError } = useQuery('vacancies', fetcherJobs);

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

    await queryClient.prefetchQuery('vacancies', fetchJobsList);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}