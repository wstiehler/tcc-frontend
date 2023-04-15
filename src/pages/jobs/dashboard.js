import { Breadcrumb, Layout } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import Link from 'next/link'

import { useSession } from 'next-auth/react';
import AccessDenied from "../../components/access-denied"

const Dashboard = () => {

    const { data: session } = useSession();

    if (!session) {
        return (
            <Layout>
                <AccessDenied />
            </Layout>
        )
    }

    return (
        <div style={{marginLeft: '90px', marginRight: '90px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link href="/"><a><HomeOutlined /></a></Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link href="/">Vagas</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link href="/jobs/dashboards">Encerradas</Link></Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
            </div>
        </div>
    );
};

export default Dashboard;