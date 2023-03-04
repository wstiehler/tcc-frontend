import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link'

const Encerradas = () => {

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <Link href="/"><a><HomeOutlined /></a></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Vagas</Breadcrumb.Item>
                <Breadcrumb.Item>Encerradas</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
            </div>
        </div>
    );
};

export default Encerradas;