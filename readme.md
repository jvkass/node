
Configuração base

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

