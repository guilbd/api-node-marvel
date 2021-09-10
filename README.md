# Api da Marvel - NodeJs

<img src="https://img.elo7.com.br/product/zoom/24D6EEC/quadro-marvel-logo-tamanho-grande-45x35-cm-quadro-homem-de-ferro.jpg" alt="Logo da Marvel" style="zoom:33%"/>

> API criiada para estudar conceitos de backend, utilizando a linguagem de programação JavaScript e o banco de dados MongoDB. Nessa API foi criado um CRUD completo de personagens da Marve.

Para utilizar o projeto faça o download do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador (a pasta que contém o arquivo packge.json), para baixar as dependencias do projeto.

## Executando o projeto

_Essa API utilizao o MongoDB como banco de dados e o Mongoose como ODM, então, antes de testar a API certifique-se de possuir o MongoDB instalado em seu computador (https://www.mongodb.com/pt-br)._

Além disso, você precisa criar o arquivo .env com a url do seu banco, _utilize o arquivo .env.example_ para criar o seu. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/db_marvel.

Agora você pode executar o projeto:

- Para executar o projeto com o nodemon, digite no terminal:

```bash
npm run dev
```

- Para executar o projeto com o node, digite no terminal:

```bash
npm start
```

## Testando a API para

Você pode utilizar as ferramentas:

- Postman
- Insomnia
- Thunder Client (plugin VSCode)

## Exemplos de URLs:

* Essa é a URL de teste padrão: http://localhost:3000/personagens

* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/personagens/5

* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/personagens/filter?identidade=Spider-Man

* Nesse site você consegue encontrar informações de personagens para testar os end-points: https://marvel.fandom.com/pt-br/wiki/Categoria:Personagens

Essa é a estrutura JSON para fazer o POST e o PUT:
```json
{
    "nome": "Peter Benjamin Paker",
    "identidade": "Spider-Man",
    "genero": "Masculino",
    "imagem": "https://static.wikia.nocookie.net/marvel/images/9/96/Friendly_Neighborhood_Spider-Man_Vol_2_8_Granov_Variant_Textless.jpg/revision/latest/scale-to-width-down/333?cb=20190906235758&path-prefix=pt-br"
}
```