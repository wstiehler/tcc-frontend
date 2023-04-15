import React from 'react';
import { useQueryClient } from 'react-query';
import fetcherVacanciesById from '../../hooks/fetchVacaniesById';
import { Breadcrumb } from 'antd';
import Link from 'next/link'
import { HomeOutlined } from '@ant-design/icons';
import { useSession } from 'next-auth/react';

const ItemDetailPage = ({ itemId }) => {

    const { data: session } = useSession();

    if (!session) {
        return (
            <Layout>
                <AccessDenied />
            </Layout>
        )
    }

    const queryClient = useQueryClient();

    const { data: item, isLoading, isError, error } = fetcherVacanciesById(itemId);

    if (isLoading) {
        return <p>Carregando...</p>;
    }

    if (isError) {
        return <p>Erro ao buscar os detalhes do item: {error.message}</p>;
    }

    if (!item) {
        return <p>Item não encontrado.</p>;
    }

    return (
        <div style={{ marginLeft: '90px', marginRight: '90px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>
                <Breadcrumb.Item><Link href="/">Vagas</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link href="/jobs">Abertas</Link></Breadcrumb.Item>
                <Breadcrumb.Item>{item.vacancy_name}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                <h1>Item Detail</h1>
                <p>Item ID: {item.id}</p>
                <p>Item Name: {item.vacancy_name}</p>
            </div>
        </div>

    );
};



export default ItemDetailPage;