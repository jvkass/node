
----------------Configuração base - Aula 1----------------------

Criação do package.json
yarn init -y

Instalar o Express pois é um micro framework necessário para Desenvolvimento
yarn add express

Todas as tipagens são dependencias de desenvolvimento por isso o -D
yarn add @types/express -D

Criando arquivo de configuração typescript
yarn tsc --init 
abrir o arquivo tsconfig.json e mudar o strict para false

Instalar um Tradutor para o node
yarn add ts-node-dev -D
colocar o scripts no package.json
  "scripts": {
    "dev": "ts-node-dev src/server.ts"
  },

yarn dev para inicializar o backend

---------------Banco de Dados - Aula 2 ------------------

Utilizar o driver/ Biblioteca knex.js que da funcionalidades para montar a estrutura das querys

Utilizamos o typeORM com o sqlite

yarn add typeorm reflect-metadata sqlite3

utilizar o typeorm para criar as migrations

criando a migrations: yarn typeorm migration:create -n CreateSettings

Criando a tabela no arquivo criado em migrations

para executar o migration, escrevemos: 

yarn typeorm migration:run

para reverter escrevemos:

yarn typeorm migration:revert

instalar o Beekepper pois é bastante leve e tem suporte para vários bancos de dados

Depois de criar a entidade Settings 

temos que descomentar pois o typeOrm pede para habilitar no tsconfig

    "experimentalDecorators": true,            
    "emitDecoratorMetadata": true,      

Criando Rotas

Depois de criar as rotas é criado uma controller