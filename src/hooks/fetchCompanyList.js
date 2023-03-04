import React from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { Spin, Alert} from "antd";

export default function fetchCompanyList(){

    const fetcherCompanys = async () => await(await (await fetch(process.env.NEXT_PUBLIC_API_BACKEND+'/v1/companys')).json())

    const { data, isLoading, isFetching, isError } = useQuery('companys', fetcherCompanys);

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
    if (isLoading) return (
        <Spin tip="Loading...">
            <Alert
                message="Aguarde!"
                description="Estamos preparando tudo para você."
                type="info"
            />
        </Spin>
    )
    
    return data
        
}


export async function getStaticProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery('companys', fetchCompanyList);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}