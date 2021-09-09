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
        return res.status(200)
    } catch(err){
        res.status(500).send({error: err});
    };
}

module.exports = {
    getAll,
    getById
}