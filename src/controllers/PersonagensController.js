const Personagem = require("../models/Personagem");

const getAll = async (req, res) => {
  try {
    const personagens = await Personagem.find(); //find é uma Promise
    return res.send({ personagens });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const personagem = await Personagem.findById(id);
    if (!personagem) {
      res.status(404).json({ message: "Personagem não encontrado" });
      return;
    }
    return res.send({ personagem });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const create = async (req, res) => {
  const { nome, identidade, genero, imagem } = req.body;

  if (!nome || !identidade || !genero || !imagem) {
    res.status(404).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  const novoPersonagem = await Personagem({
    nome,
    identidade,
    genero,
    imagem,
  });

  try {
    await novoPersonagem.save();
    return res
      .status(201)
      .send({ message: "Personagem criado com sucesso", novoPersonagem });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const update = async (req, res) => {
  const { nome, identidade, genero, imagem } = req.body;

  if (!nome || !identidade || !genero || !imagem) {
    res.status(400).send({
      message: "Você não enviou todos os dados necessários para o cadastro",
    });
    return;
  }

  res.personagem.nome = nome;
  res.personagem.identidade = identidade;
  res.personagem.genero = genero;
  res.personagem.imagem = imagem;

  try {
    await res.personagem.save();
    res.send({ message: "Personagem alterado com sucesso!" });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

const del = async (req, res) => {
  try {
    await res.personagem.remove();
    res.send({ message: "personagem removido com sucesso" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const filterByName = async (req, res) => {
  const nome = req.query.nome;
  if (!nome) {
    res.status(400).send({ erro: "Parametro não recebido" });
    return;
  }
  try {
    const personagens = await Personagem.find({ nome: { $regex: `${nome}` } });
    return res.send({ personagens });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

const filterAll = async (req, res) => {
  let { nome, identidade, genero } = req.query;

  !nome ? (nome = "") : (nome = nome);
  !identidade ? (identidade = "") : (identidade = identidade);
  !genero ? (genero = "") : (genero = genero);

  try {
    const personagens = await Personagem.find({
      nome: { $regex: `${nome}`, $options: 'i' },
      identidade: { $regex: `${identidade}`, $options: 'i'},
      genero: { $regex: `${genero}`, $options: 'i'},
    });

    if (personagens.length === 0)
      return res.status(404).send({ erro: "Personagem não encontrado" });

    return res.send({ personagens });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
  filterByName,
  filterAll,
};