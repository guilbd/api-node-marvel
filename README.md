# Api da Marvel - NodeJs

![Logo da Marvel](https://img.elo7.com.br/product/zoom/24D6EEC/quadro-marvel-logo-tamanho-grande-45x35-cm-quadro-homem-de-ferro.jpg)

> API criiada para estudar conceitos de backend, utilizando a linguagem de programação JavaScript e o banco de dados MongoDB. Nessa API foi criado um CRUD completo de personagens da Marve.

Para utilizar o projeto faça o download do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador (a pasta que contém o arquivo packge.json), para baixar as dependencias do projeto.

## Executando o projeto

*Essa API utilizao o MongoDB como banco de dados e o Mongoose como ODM, então, antes de testar a API certifique-se de possuir o MongoDB instalado em seu computador (https://www.mongodb.com/pt-br).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.example* para criar o seu. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/db_marvel.

Agora você pode executar o projeto:
* Para executar o projeto com o nodemon, digite no terminal:
 ```bash
 npm run dev
 ```

* Para executar o projeto com o node, digite no terminal:
```bash
npm start
```
