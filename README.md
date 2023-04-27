| Branch |                                                                         
:------------------------------------------------------------------------------------------------------------------------------------------------------: | 
| master | 

# TCC Backend Portal



## Desenvolvimento

- docker (para dependências)
- docker-compose (para dependências)
- nextjs ([site oficial do nextjs](https://nextjs.org))

### Setup

Instale as dependências e faça as configurações nescessarioas para o pre-commit

```sh
make setup
```


### Rodando o serviço

```sh
npm run dev
```


#### Adicione as sequintes variaveis de ambiente para rodar a aplicação. 

Crie o arquivo `.env.development` na raiz do projeto.

.env.local

|Nome|Tipo|
|----|----|
|NODE_ENV| string|
|NEXTAUTH_URL| string|
|NEXT_PUBLIC_API_BACKEND| string|
|AUTH0_CLIENT_ID| number|
|AUTH0_CLIENT_SECRET|  string|
|AUTH0_BASE_URL |string|
|MYSQL_ROOT_PASSWORD |string|
|AUTH0_ISSUER_BASE_URL|  string|
|AUTH0_SECRET| number|


#### Makefile

Criamos um `Makefile` para simplificar o desenvolvimento. Para rodar o serviço em ambiente local basta rodar o comando abaixo:

Inicia a infraestrutura local, e o serviço:

```sh
npm run dev
```
