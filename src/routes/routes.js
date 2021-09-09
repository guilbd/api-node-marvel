const express = require('express');
const routes = express.Router();

const PersonagemController = require('../controllers/PersonagensController');
const PersonagemMiddlewares = require('../middlewares/PersonagensMiddlewares');

routes.get("/personagens", PersonagensController, getAll);
routes.get("/personagens/:id", PersonagensMiddlewares.validaId, PersonagensController.getById);

module.exports = routes;