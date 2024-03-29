import { Breadcrumb, Layout, Button, Result } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link'

import { useSession } from 'next-auth/react';
import AccessDenied from "../../components/accessDenied"


const Closed = () => {

    const { data: session } = useSession();

    if (!session) {
        return (
            <Layout>
                <AccessDenied />
            </Layout>
        )
    }

    return (
        <div style={{ marginLeft: '90px', marginRight: '90px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link href="/"><a><HomeOutlined /></a></Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link href="/jobs">Minhas Vagas</Link></Breadcrumb.Item>
                <Breadcrumb.Item>Encerradas</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
                <Result
                    title="Aguarde, estamos trabalhando nessa página."
                    extra={
                        <Button type="primary" key="console">
                           <Link href="/jobs"> Voltar para as minhas vagas</Link>
                        </Button>
                    }
                />

            </div>
        </div>
    );
};

export default Closed;