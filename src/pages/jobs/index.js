import { SafetyCertificateOutlined, DollarOutlined, HomeOutlined } from '@ant-design/icons';

import Message from '../../components/message';
import { useSession } from 'next-auth/react';
import AccessDenied from '../../components/access-denied';

import Link from 'next/link';

import fetcherVacanciesByEmail from '../../hooks/fetchVacaniesByEmail';

import React, { useEffect, useState } from 'react';
import { Avatar, Breadcrumb, List, Skeleton, Button, Space, Badge, Card, Layout } from 'antd';

const Index = () => {

    const { data: session } = useSession();

    if (!session) {
        return (
            <Layout>
                <AccessDenied />
            </Layout>
        )
    }

    const data = fetcherVacanciesByEmail();


    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon, { style: { marginRight: 8 } })}
            {text}
        </Space>
    );


    return (
        <div style={{marginLeft: '90px', marginRight: '90px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link href="/"><a><HomeOutlined /></a></Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link href="/">Vagas</Link></Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={data.vacancies}
                    renderItem={(item) => (
                        <Badge.Ribbon  text={item.level_experience} 
                            color={item.level_experience === 'Junior' ? 'green' : item.level_experience === 'Pleno' ? 'blue' : item.level_experience === 'Senior' ? 'gray' : 'black'}
                        >
                            <Card size="small">
                                <List.Item
                                    actions={
                                        [
                                            <a key="list-loadmore-more" onClick={Message}>Editar</a>,
                                            <a key="list-loadmore-more" onClick={Message}>Encerrar</a>,
                                        ]
                                    }
                                >
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            avatar={<Avatar src={" "} />}
                                            title={<Link href={`/jobs/${item.id}`}><a>{item.vacancy_name}</a></Link>}
                                            description={item.description}
                                            style={{ display: 'flex', justifyContent: 'space-between' }}
                                            />
                                        <List.Item
                                            actions={[
                                                <IconText icon={DollarOutlined} text={"R$ "+ item.salary} 
                                                key="list-vertical-star-o" />,
                                                <IconText icon={SafetyCertificateOutlined} text={item.company_name} key="list-vertical-like-o" />,
                                            ]}
                                        />
                                    </Skeleton>

                                </List.Item>
                            </Card>
                        </Badge.Ribbon>
                    )}
                />
            </div>
        </div>
    );
};

export default Index;