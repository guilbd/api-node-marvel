const mongoose = require('mongoose');

const personagemSchema = new mongoose.Schema({
    nome:{
        type: 'string',
        require: true
    },
    identidade:{
        type: 'string',
        require: true
    },
    genero:{
        type: 'string',
        require: true
    },
    iamgem:{
        type: 'string',
        require: true
    },
})

module.exports = mongoose.model("Personagem", personagemSchema)