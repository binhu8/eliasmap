const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const rede = new Schema({
    nome: String,
    contato: String,
    endereco: {
        cep: String,
        logradouro: String,
        numero: String,
        bairro: String,
        localidade: String,
        uf: String,
        lat: Number,
        lng: Number 
    },
    lojas: [
        {
            nome: String,
            contato: String,
            endereco: {
                        cep: String,
                        logradouro: String,
                        numero: String,
                        bairro: String,
                        localidade: String,
                        uf: String,
                        lat: Number,
                        lng: Number 
                }
        }
    ]
});

module.exports = mongoose.model('Rede', rede)