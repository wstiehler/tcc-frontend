import { Breadcrumb, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Link from 'next/link'

const Sobre = () => {
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>
                    <Link href="/"><a><HomeOutlined /></a></Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Sobre</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360, }}>
            </div>
        </div>
    );
};

export default Sobre;