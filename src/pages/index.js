import { SafetyCertificateOutlined, DollarOutlined, HomeOutlined, HeartOutlined, FullscreenOutlined } from '@ant-design/icons';

import MessageWaiting from '../components/messages/messageWaiting';

import fetchJobsList from '../hooks/fetchJobsList';


import React from 'react';
import Link from 'next/link';
import { Avatar, Breadcrumb, List, Skeleton, Space, Badge, Card } from 'antd';

const Index = () => {

    const data = fetchJobsList();

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon, { style: { marginRight: 8 } })}
            {text}
        </Space>
    );


    return (
        <div style={{marginLeft: '90px', marginRight: '90px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><HomeOutlined/></Breadcrumb.Item>
                <Breadcrumb.Item>Vagas</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    dataSource={data.vacancies}
                    renderItem={(item) => (
                        <Badge.Ribbon  text={item.level_experience} 
                            color={item.level_experience === 'Junior' ? 'green' : item.level_experience === 'Pleno' ? 'blue' : item.level_experience === 'Sênior' ? 'black' : 'gray'}
                        >
                            <Card size="small">
                                <List.Item
                                    actions={
                                        [
                                            <a key="list-loadmore-more" onClick={MessageWaiting}>Candidatar-se</a>,
                                            <a key="list-loadmore-more" onClick={MessageWaiting}><HeartOutlined /></a>
                                        ]
                                    }
                                >
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            avatar={<Avatar src={""} />}
                                            title={<Link href={`/jobs/${item.id}`}><a>{item.vacancy_name}</a></Link>}
                                            description={item.description}
                                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
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