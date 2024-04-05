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

#### Trocando de banco

Ao trocar de provider execute este comando q ira criar tudo oque tu fez neste novo provider

- npx prisma db push

## Shadcn-ui

SHADCN - Lib de components para ultilizarmos no projeto

- npx shadcn-ui@latest init

jogue as pastas criadas para parta app
(recomendado renomar colocando _ na frente dos nomes afim de organização do projeto)

em components.json mude o path dos diretorios no campo "aliases"

no globals.css vc pode acrescentar suas var de cores

opcional:: em layout.tsx na raiz da app .. insira a clas "dark" no body 

## lib DateFns
Lib para formatar datas de foma facil e rapida
- npm i date-fns

## finecut

crie uma pasta (home) na pasta app e mova o page.tsx da raiz para esta pasta.
() - para route groups

## consumindo dados do prisma

utilizando o server componet do next chamaremos o prisma dentro da home page
para isso vamos criar na pasta _lib em "app" o arquivo prisma.ts
(use o existente como exemplo)

Agora dentro do local que vc quer trazer dados vc pode chamar uma consuta do prisma.
(use como exemplo a consulta de barbearias dentro de app/(home)/page.tsx)

## imagem via url no next

Devemos configurar em next config o dominio remoto de onde vem a imagem.
(consulte o parametro images dentro do arquivo next.config)


## Criando Autenticação com NextAuth

vamos instalar o nextauth

- npm install next-auth

agora vamos criar o arquivo route.js dentro de 
'app/api/auth/[...nextauth]'

aqui vamos configurar o provider do next auth

use o arquivo como exemplo.

tambem precisamos instalar o adptador do prisma

 npm install @auth/prisma-adapter

 no rout tb temos que configurar o adapter,
use o arquivo como exemplo novamente.

agora vamos inserir a as models do prisma para ultilzar o nextauth.
use a documentação para pegar as models ou use o proprio arquivo de schema deste projeto.


configure o google cloud inserindo o novo projeto e crie a auth com google e o id tb passando o url da app e pra gerar o clinet id e client secret.. 
pesquise no yt next auth com google caso necessario.

Agora criamos o authprovider no auth.tsx  dentro da pasta providers.
Insira ele no layout , englobando toda a app.
