const mongoose = require('mongoose');
const Schema = mongoose.Schema

const loja = new Schema({
    nome: String,
    contato: String, 
    endereco: {
        cep: String,
        logradouro: String,
        numero: String, 
        bairro: String,
        localidade: String,
        uf: String
    }
});

module.exports = mongoose.model('Loja', loja)