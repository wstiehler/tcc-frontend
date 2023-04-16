import { SafetyCertificateOutlined, DollarOutlined, HomeOutlined } from '@ant-design/icons';

import Message from '../../components/messages/message';
import MessageWaiting from '../../components/messages/messageWaiting';
import { useSession } from 'next-auth/react';
import AccessDenied from '../../components/accessDenied';

import Link from 'next/link';

import fetcherJobsByEmail from '../../hooks/fetchJobsByEmail';
import inactiveJob from '../../hooks/inactiveJob';

import React from 'react';
import { Avatar, Breadcrumb, List, Skeleton, Space, Badge, Card, Layout, Modal } from 'antd';

const Index = () => {

    const { data: session } = useSession();

    if (!session) {
        return (
            <Layout>
                <AccessDenied />
            </Layout>
        )
    }

    const data = fetcherJobsByEmail();


    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon, { style: { marginRight: 8 } })}
            {text}
        </Space>
    );

    // const InactiveJob = (id) => {
    //     // inactiveJob(id);
    //     Modal.success({
    //         content: 'Vaga encerrada com sucesso!',
    //     });
    // }

    return (
        <div style={{marginLeft: '90px', marginRight: '90px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link href="/"><a><HomeOutlined /></a></Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link href="/">Vagas</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Minhas Vagas</Breadcrumb.Item>
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
                                            <a key="messageEdit" onClick={MessageWaiting}>Editar</a>,
                                            <a key="messageWaiting" onClick={MessageWaiting}>Inativar</a>,
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