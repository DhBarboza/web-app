# web-app

NodeJS -> TypeScript -> Knex (Query Builder)

- Inicializar um projeto node: `npm init -y`
- Instalar o typescript: `npm install typescript -D`
- Utilizar o type script em tempo de execução: `npm install tsx`
- `npx tsc --init`
- Instalar o Knex com o Postgress: `npm install knex pg`
- Instalar o Knex globalmente: `npm install knex -g`
- Gerar migrações: Criar o script no arquivo `package.json`
- Executar `npm rum migration:make create-users-table`
- `npm install knex -g`
- `knex init -x ts`

Route -> Controller -> UseCase -> Access to Data Base: Database access Object (DAO) ou Repository

**DDD -> Domain, Drive e Design:**

Possuí uma estrutura de três pastas: application, domain e infrastructure

- application: Possuí classes, repositórios, casos de uso e regras de negócios da solução
- domain: Possuí as definições de entidades, tabelas de banco de dados, modelos de acesso a banco de dados e tratativa de erros customizados
- infra: Referência a tudo que é externo da aplicação, como conexões com banco de dados, instância do 'Express', helper ou utilitários e protocolos de comunicação
