## next 14

- npx create-react-app@latest nome-do-app

  - yes , yes ,yes ,no , yes, no


## prisma

- npm install prisma --save-dev

- npx prisma init --datasource-provider postgresql

no .env vamos confirgurar o database url

no eschema.prisma vamos definiar as tabalas que compoe a app

apos definir execute:
- npx prisma format
obs: corrige as referencias de tabelas many-to-one / many-to-many

agora vamos rodar a primeira migration pra criar as tabelas.

- npx prisma migrate dev --name add_initial_tables

Crie um seed.ts dentro da pasta prisma
(use a do projeto como exemplo se necessario)

Dentro do arquivo package.json acrescente este

 "prisma": {
    "seed": "ts-node prisma/seed.ts"
  },

instale o ts-node pra executar a seed

 - npm install -D ts-node

agora vamos executar a seed para inserir dados fake no banco

- npx prisma db seed

## dependencias

SHADCN - Lib de components para ultilizarmos no projeto

- npx shadcn-ui@latest init

