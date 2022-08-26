const mongoose = require('mongoose');

const schemaRanking = mongoose.Schema({
    "cedula": { type: String, required: true },
    "nombre": { type: String, required: true },
    "ranking": { type: String, required: true },
    "mensaje": { type: String, required: false },
});

let modelo = mongoose.model('Ranking', schemaRanking, 'ranking-medico');

module.exports = modelo;