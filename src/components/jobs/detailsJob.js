import React from 'react';
import { Descriptions, Divider} from 'antd';


export default function DetailJob({item}) {

  return (
    <>
      <Descriptions title="Informações da Vaga" >
        <Descriptions.Item label="Título">{item.vacancy_name}</Descriptions.Item>
        <Descriptions.Item label="Descrição">{item.description}</Descriptions.Item>
        <Descriptions.Item label="Salário">{item.salary}</Descriptions.Item>
        <Descriptions.Item label="Experiência">{item.level_experience}</Descriptions.Item>
      </Descriptions>

      <Divider></Divider>

      <Descriptions title="Informações da Empresa" >
        <Descriptions.Item label="Empresa">{item.company_name}</Descriptions.Item>
        <Descriptions.Item label="Responsável">{item.responsible_name}</Descriptions.Item>
        <Descriptions.Item label="Email">{item.email}</Descriptions.Item>
        <Descriptions.Item label="Telefone">{item.contact}</Descriptions.Item>
      </Descriptions>

      <Divider></Divider>

      <Descriptions title="Informações Culturais" >
        <Descriptions.Item label="Modalidade de trabalho">{item.is_home_office}</Descriptions.Item>
        <Descriptions.Item label="Possui acessibilidade?">{item.has_physical_accessibility}</Descriptions.Item>
        <Descriptions.Item label="Possui profissional para apoiar?">{item.has_superior_monitors}</Descriptions.Item>
        <Descriptions.Item label="Cultura">{item.cultural_caracteristics}</Descriptions.Item>
      </Descriptions>

      <Divider></Divider>

      <Descriptions title="Informações de Adicionais" >
        <Descriptions.Item label="Criado em">{item.created_at}</Descriptions.Item>
        <Descriptions.Item label="Atualizado em">{item.updated_at}</Descriptions.Item>
      </Descriptions>
    </>
  );
};
