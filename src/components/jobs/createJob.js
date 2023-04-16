import React, { useState } from 'react';
import {
  Button,
  message,
  Steps,
  theme,
  Form,
  Input,
  InputNumber,
  Select,
  Col,
  Row,
} from 'antd';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

import createJobData from '../../hooks/createJob';
import { useQueryClient } from 'react-query';
import { useSession } from 'next-auth/react';
import router from 'next/router';



const CreateJob = () => {

  const queryClient = useQueryClient();

  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    level_experience: '',
    vacancy_name: '',
    description: '',
    specification : '',
    salary: 0,
    is_home_office: '',
    cultural_caracteristics: '',
    has_physical_accessibility: '',
    has_superior_monitors: '',
    company_name: '',
    email: session.user.email,

    responsible : {
      responsible_name: '',
      contact: '',
    }
  });

  const handleSubmit = async () => {
    try {
      await createJobData(formData);
      router.push('/jobs')
      queryClient.invalidateQueries('formdata');
    } catch (error) {
      console.error(error);
    }
  };


  const FormStep1 = () => {

    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 12 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 12 },
      },
    };

    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 12, offset: 0 },
        sm: { span: 12, offset: 12 },
      },
    };

    return (
      <Form
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        style={{
          marginTop: 40
        }}
      >
        <Row gutter={12}>
          <Col span={16}>
            <Form.Item label="Título">
              <Input
                placeholder="Título da vaga"
                value={formData.vacancy_name}
                onChange={(event) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    vacancy_name: event.target.value,
                  }))
                }
              />
            </Form.Item>
            <Form.Item label="Senioridade">
              <Select
                placeholder="Selecione a senioridade"
                value={formData.level_experience}
                onChange={(value) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    level_experience: value,
                  }))
                }>
                <Select.Option value="Junior">Junior</Select.Option>
                <Select.Option value="Pleno">Pleno</Select.Option>
                <Select.Option value="Sênior">Sênior</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Faixa Salarial">
              <InputNumber 
                placeholder="Faixa salarial"
                value={formData.salary}
                onChange={(value) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    salary: value,
                  }))
                }
              />
            </Form.Item>

            <Form.Item label="Descrição">
              <Input.TextArea
                placeholder="Descreva a vaga e o que você espera do candidato"
                value={formData.description}
                onChange={(event) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    description: event.target.value,
                  }))
                }
              />
            </Form.Item>

            <Form.List
              name="Especificações"
              rules={[
                {
                  validator: async (_, names) => {
                    if (!names || names.length < 1) {
                      return Promise.reject(new Error('É necessário possuir ao menos 1 especificação'));
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                      label={index === 0 ? 'Especificações' : ''}
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Por favor, insira uma especificação ou delete este campo.",
                          },
                        ]}
                        noStyle
                      >
                        <Input placeholder="O que você procura no seu candidato?" style={{ width: '95%' }} />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item
                   placeholder="Descreva a vaga e o que você espera do candidato"
                   value={formData.specification}
                   onChange={(event) =>
                     setFormData((prevFormData) => ({
                       ...prevFormData,
                       specification: event.target.value,
                     }))
                   }
                  >
                    
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{
                        marginLeft: '100%'
                      }}
                      icon={<PlusOutlined />}
                    >
                      Adicionar especificação
                    </Button>

                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Col>
        </Row>
      </Form>
    );
  };

  const FormStep2 = () => {
    return (
      <Form
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        style={{
          marginTop: 40
        }}
      >
        <Row gutter={12}>
          <Col span={16}>
            <Form.Item label="Empresa">
              <Input 
                placeholder="Nome da empresa"
                value={formData.company_name}
                onChange={(event) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    company_name: event.target.value ,
                  }))
                }
              />
            </Form.Item>
            <Form.Item label="Responsável">
              <Input 
                placeholder="Nome da empresa"
                value={formData.responsible_name}
                onChange={(event) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    responsible_name: event.target.value ,
                  }))
                }
              />
            </Form.Item>
            <Form.Item label="Telefone">
              <Input 
                placeholder="Telefone da empresa"
                value={formData.contact}
                onChange={(event) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    contact: event.target.value,
                  }))
                }
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  };

  const FormStep3 = () => {

    return (
      <Form
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        style={{
          marginTop: 40
        }}
      >
        <Row gutter={12}>
          <Col span={16}>
            <Form.Item label="O local possui acessibilidade?">
              <Select
                placeholder="Selecione uma opção"
                value={formData.has_physical_accessibility}
                onChange={(value) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    has_physical_accessibility: value,
                  }))
                }
              >
                <Select.Option value="Sim">Sim</Select.Option>
                <Select.Option value="Não">Não</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Profissional p/ Acompanhamento">
              <Select
                placeholder="Selecione uma opção"
                value={formData.has_superior_monitors}
                onChange={(value) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    has_superior_monitors: value,
                  }))
                }
              >
                <Select.Option value="Sim">Sim</Select.Option>
                <Select.Option value="Não">Não</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Home Office">
              <Select
                placeholder="Selecione uma opção"
                value={formData.is_home_office}
                onChange={(value) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    is_home_office: value,
                  }))
                }
              >
                <Select.Option value="Sim">Sim</Select.Option>
                <Select.Option value="Não">Não</Select.Option>
                <Select.Option value="Parcialmente">Parcialmente</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Cultura">
              <Input.TextArea 
                placeholder="Descreva a cultura da empresa"
                value={formData.cultural_caracteristics}
                onChange={(event) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    cultural_caracteristics: event.target.value,
                  }))
                }
              />
            </Form.Item>

          </Col>
        </Row>
      </Form>
    );
  };


  const steps = [
    {
      title: 'Informações da Vaga',
      content: FormStep1(),
    },
    {
      title: 'Informações da Empresa',
      content: FormStep2(),
    },
    {
      title: 'Informações Gerais',
      content: FormStep3(),
    },
  ];

  const Step = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent(current + 1);
    };

    const prev = () => {
      setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle = {
      lineHeight: '260px',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
    };

    return (
      <>
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Próximo
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() =>
              [message.success('Processo finalizado com sucesso!'),
              handleSubmit()
            ]
            }>
              Enviar
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Anterior
            </Button>
          )}
        </div>
      </>
    );
  };

  return (
    Step()
  );

}

export default CreateJob;




