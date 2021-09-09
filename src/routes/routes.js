const express = require('express');
const routes = express.Router();

const PersonagemController = require("../controllers/PersonagensController");
const PersonagemMiddleware = require("../middlewares/PersonagemMiddlewares");

routes.get("/personagens", PersonagemController.getAll);
routes.get("/personagens/:id", PersonagemMiddleware.validaId, PersonagemController.getById);
routes.post("/personagens", PersonagemController.create)


module.exports = routes