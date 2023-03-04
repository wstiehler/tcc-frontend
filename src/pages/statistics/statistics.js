import { RiseOutlined, AreaChartOutlined, LineChartOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic} from 'antd';


function Statistics() {


    return (
        <>
            <h1>Dashboard</h1>

            <Row gutter={[16, 16]} >
                <Col span={7}>
                    <Card bordered={false}>
                        <Statistic
                            title="Prospecção de Faturamento"
                            value={0}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<RiseOutlined />}
                            suffix="reais"
                        />
                    </Card>
                </Col>
                <Col span={7}>
                    <Card bordered={false}>
                        <Statistic
                            title="Prospecção de Lucro Liquido"
                            value={0}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<RiseOutlined />}
                            suffix="reais"
                        />
                    </Card>
                </Col>

                <Col span={7}>
                    <Card bordered={false}>
                        <Statistic
                            title="Definir Meta de Faturamento"
                            value={0}
                            precision={2}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<RiseOutlined />}
                            suffix="reais"
                        />
                    </Card>
                </Col>

                <Col span={7}>
                    <Card bordered={false}>
                        <Statistic
                            title="Clientes Cadastrados"
                            value={0}
                            precision={0}
                            valueStyle={{ color: '#3f8600' }}
                            prefix={<AreaChartOutlined />}
                        />
                    </Card>
                </Col>

                <Col span={7}>
                    <Card bordered={false}>
                        <Statistic
                            title="Clientes Convertidos"
                            value={0}
                            precision={0}
                            valueStyle={{ color: '#cf1322' }}
                            prefix={<LineChartOutlined />}
                        />
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default Statistics;