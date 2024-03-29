import { LogoutOutlined, LoginOutlined, InfoCircleOutlined, DownOutlined, HomeOutlined, GlobalOutlined, BugOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Popover, TourProps } from 'antd';
import React, { useRef, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router'

// import GetVersion from '../components/getVersion'

import Link from 'next/link'

const CustomLayout = ({ children }) => {
    const { data: session } = useSession();

    const { Header, Content, Footer } = Layout;

    const router = useRouter();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className="site-layout">
        
                <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', background: '#415A80' }} >

                    <div style={{ marginRight: '35px', margin: '0px 0px 0px 0px' }}>
                        {session ? (
                            <Button onClick={() => signOut()} style={{ float: 'right', margin: '17px 10px 0 0', backgroundColor: '#D7E2E9', color: '#415A80' }}><LogoutOutlined />Logout</Button>
                        ) : (
                            <Button onClick={() => router.push("/api/auth/signin")} style={{ float: 'right', margin: '17px 10px 0 0' }}><LoginOutlined />Login</Button>
                        )}
                    </div>

                    <div style={{ marginRight: '15px', float: 'right', margin: '0px 50px 0px 0px', color: '#fff' }}>
                        <Popover content="Relate o erro para o nosso suporte!" title="Relatar Bug">
                            <Button style={{ float: 'right', margin: '17px 0px 0 0', backgroundColor: '#415A80', color: '#fff' }}>
                                <Link href="https://forms.gle/9Q5Z7Z7Z7Z7Z7Z7Z7" target="_blank"><a><BugOutlined /></a></Link>
                            </Button>
                        </Popover>
                    </div>

                    <Menu mode="horizontal" style={{ background: '#415A80', color: '#fff' }}>
                        <h1 className='logo'>Open Vagas</h1>

                        <Menu.Item key="sub1" style={{ color: router.pathname === '/' ? 'black' : '#fff' }}>
                            <Link href="/"><a><HomeOutlined /><span>Início</span></a></Link>
                        </Menu.Item>

                        <Menu.SubMenu key="sub2" icon={<DownOutlined />} title="Vagas">
                            <Menu.Item key="1">
                                <Link href="/jobs/new"><a><span>Cadastrar</span></a></Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link href="/jobs"><a><span>Em aberto</span></a></Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link href="/jobs/inactive"><a><span>Encerradas</span></a></Link>
                            </Menu.Item>
                        </Menu.SubMenu>

                        <Menu.Item key="sub3" style={{ color: router.pathname === '/jobs/dashboard' ? 'black' : '#fff' }} >
                            <Link href="/jobs/dashboard"><a><GlobalOutlined /><span>Dashboard</span></a></Link>
                        </Menu.Item>


                        <Menu.Item key="sub4" style={{ color: router.pathname === '/sobre' ? 'black' : '#fff' }}>
                            <Link href="/sobre"><a><InfoCircleOutlined /><span>Sobre o projeto</span></a></Link>
                        </Menu.Item>

                    </Menu>

                </Header>

                <Content>
                    {children}
                </Content>

                <Footer >
                    <div style={{ textAlign: 'center', marginBottom: '-20px' }}>
                        ©2023 OpenVagas Created By <a href="https://www.linkedin.com/in/wstiehler/" target="_blank">William Villani Stiehler</a>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        {/* {GetVersion()} */}
                        Release: v1.0.1
                    </div>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default CustomLayout;