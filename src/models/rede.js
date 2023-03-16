const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const rede = new Schema({
    rede: String,
    endereco: {
        cep: String,
        logradouro: String,
        numero: String,
        bairro: String,
        localidade: String,
        uf: String
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
                        uf: String
                }
        }
    ]
});

module.exports = mongoose.model('Rede', rede)