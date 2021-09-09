const Personagem = require('../models/Personagem')

const getAll = async (req, res) => {
    try{
        const personagens = await Personagem.find() //find é uma Promise
        return res.send({personagens})
    } catch(err){
        res.status(500).send({error: err})
    }
};

const getById = async (req, res) => {
    const {id} = req.params.id;

    try{
        const personagem = await Personagem.findById(id);
        if(!personagem){
            res.status(404).send({message: "personagem não encontrado"})
            return;
        };
        return res.status({personagem})
    } catch(err){
        res.status(500).send({error: err});
    };
}

const create = async (req, res) => {
    const {nome, identidade, genero, imagem} = req.body;

    if(!nome || !identidade || !genero || !imagem){
        res.status(404).send({message: "Você não enviou todos os dados necessários para o cadastro"});
        return;
    }

    const novoPersonagem = await Personagem({
        nome,
        identidade,
        genero, 
        imagem
    });

    try {
        await novoPersonagem.save();
        return res.status(201).send({message: "Personagem criado com sucesso", novoPersonagem});
    } catch(err){
        res.status(500).send({error: err})
    }
}

module.exports = {
    getAll,
    getById,
    create
}