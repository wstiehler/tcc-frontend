import { LogoutOutlined, LoginOutlined, InfoCircleOutlined, DownOutlined, HomeOutlined } from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import React, { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router'

import Link from 'next/link'

import AccessDenied from "../components/access-denied"

const CustomLayout = ({ children }) => {
    const { data: session } = useSession();

    const { Header, Content, Footer, Sider } = Layout;

    const router = useRouter();

    // if (!session) {
    //     return (
    //         <Layout>
    //             <AccessDenied />
    //         </Layout>
    //     )
    // }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout">
                <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', background: '#415A80' }} >

                    <div style={{marginRight: '35px'}}>
                        {session ? (
                            <Button onClick={() => signOut()} style={{ float: 'right', margin: '17px 10px 0 0', backgroundColor: '#D7E2E9', color: '#415A80' }}><LogoutOutlined />Logout</Button>
                        ) : (
                            <Button onClick={() => router.push("/api/auth/signin")} style={{ float: 'right', margin: '17px 10px 0 0' }}><LoginOutlined />Login</Button>
                        )}
                    </div>

                    <Menu  mode="horizontal"  style={{background: '#415A80', color: '#fff'}}>
                        <h1 className='logo'>Open Vagas</h1>

                        <Menu.Item key="sub1">
                            <Link href="/"><a><HomeOutlined /><span>Home</span></a></Link>
                        </Menu.Item>

                        <Menu.SubMenu key="sub2" icon={<DownOutlined />} title="Vagas">
                            <Menu.Item key="1">
                                <Link href="/vagas/cadastrar"><a><span>Cadastrar</span></a></Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link href="/vagas/dashboard"><a><span>Dashboard</span></a></Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link href="/vagas"><a><span>Em aberto</span></a></Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link href="/vagas/encerradas"><a><span>Encerradas</span></a></Link>
                            </Menu.Item>
                        </Menu.SubMenu>


                        <Menu.Item key="sub3">
                            <Link href="/sobre"><a><InfoCircleOutlined /><span>Sobre o projeto</span></a></Link>
                        </Menu.Item>
                    </Menu>

                </Header>

                <Content style={{marginLeft: '90px', marginRight: '90px' }}>
                    {children}
                </Content>

                <Footer >
                    <div style={{ textAlign: 'center' }}>
                        ©2023 OpenVagas Created By EvoluInfo Tecnologia
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        v0.2.0-beta
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default CustomLayout;