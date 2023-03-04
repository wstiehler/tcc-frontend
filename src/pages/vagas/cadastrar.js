import { Breadcrumb, Layout } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { useSession, signOut } from 'next-auth/react';

import Link from 'next/link'

import CreateJob from '../../components/jobs/create-job';
import Xpto from '../../components/xpto'; 
import AccessDenied from "../../components/access-denied"


const Cadastrar = () => {

    const { data: session } = useSession();

    if (!session) {
        return (
            <Layout>
                <AccessDenied />
            </Layout>
        )
    }

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <Link href="/"><a><HomeOutlined /></a></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Vagas</Breadcrumb.Item>
                <Breadcrumb.Item>Cadastrar</Breadcrumb.Item>

            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                {/* <CreateJob /> */}
                <Xpto />

            </div>
        </div>
    );
};

export default Cadastrar;