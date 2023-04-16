import React from 'react';
import { useQueryClient } from 'react-query';
import fetcherJobById from '../../hooks/fetchJobById';
import { Breadcrumb, Descriptions, Divider } from 'antd';
import Link from 'next/link'
import { HomeOutlined } from '@ant-design/icons';
import DetailJob from '../../components/jobs/detailsJob';

const ItemDetailPage = ({ itemId }) => {
    const queryClient = useQueryClient();
    const { data: item, isLoading, isError, error } = fetcherJobById(itemId);

    if (isLoading) {
        return (
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                <p>Carregando...</p>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                <p>Erro ao buscar os detalhes do item: {error.message}</p>
            </div>
        )
    }

    if (!item) {
        return (
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                <p>Item não encontrado.</p>
            </div>
        )
    }

    return (
        <div style={{ marginLeft: '90px', marginRight: '90px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link href="/"><a><HomeOutlined /></a></Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link href="/jobs">Minhas Vagas</Link></Breadcrumb.Item>
                <Breadcrumb.Item>{item.vacancy_name}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                <DetailJob item={item} />
            </div>
        </div>

    );
};

export async function getServerSideProps(context) {
    const { params } = context;
    const itemId = params.id;

    return {
        props: {
            itemId,
        },
    };
}

export default ItemDetailPage;