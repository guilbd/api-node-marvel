require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));