import { FieldTimeOutlined, DollarOutlined, HomeOutlined } from '@ant-design/icons';

import Message from '../components/message';
import DetailJob from '../components/jobs/details-job';


import React, { useEffect, useState } from 'react';
import { Avatar, Breadcrumb, List, Skeleton, Button, Space, Badge, Card } from 'antd';

const Index = () => {

    const count = 3;
    const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        getData((res) => {
            setData(res.results);
            setList(res.results);
            setInitLoading(false);
        });
    }, []);

    const getData = (callback) => {
        fetch(fakeDataUrl)
            .then((response) => response.json())
            .then((res) => callback(res))
            .catch((e) => {
                console.log(e);
            });
    };

    const onLoadMore = () => {
        setLoading(true);
        if (data.length > 14) {
            message.warning('Infinite List loaded all');
            setLoading(false);
            return;
        }
        getData((res) => {
            setData(data.concat(res.results));
            setList(data.concat(res.results));
            setLoading(false);
        });
    };

    const loadMore = (
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: 'center',
                    marginTop: 12,
                    height: 32,
                    lineHeight: '32px',
                }}
            >
                <Button onClick={onLoadMore}>Carregar mais vagas</Button>
            </div>
        ) : null
    );

    const xpto = () => {
        alert('xpto');
    }

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon, { style: { marginRight: 8 } })}
            {text}
        </Space>
    );


    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <HomeOutlined />
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                <List
                    className="demo-loadmore-list"
                    itemLayout="horizontal"
                    loading={initLoading}
                    loadMore={loadMore}
                    dataSource={list}
                    renderItem={(item) => (
                        <Badge.Ribbon text="Sênior" color="green">
                            <Card size="small">
                                <List.Item
                                    actions={
                                        [
                                            <a key="list-loadmore-edit" onClick={DetailJob}>Detalhes</a>,
                                            <a key="list-loadmore-more" onClick={Message} > Candidatar-se</a>
                                        ]
                                    }
                                >
                                    <Skeleton avatar title={false} loading={item.loading} active>
                                        <List.Item.Meta
                                            avatar={<Avatar src={item.picture.large} />}
                                            title={<a href="https://ant.design">{item.name?.last}</a>}
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            style={{ display: 'flex' }}
                                        />
                                        <List.Item
                                            actions={[
                                                <IconText icon={DollarOutlined} text="1200" key="list-vertical-star-o" />,
                                                <IconText icon={FieldTimeOutlined} text="2" key="list-vertical-like-o" />,
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