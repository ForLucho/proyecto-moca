const mongoose = require('mongoose');

const schemaPago = mongoose.Schema({
    "nombre": { type: String, required: true },
    "fecha": { type: String, required: true },
    "numerotarjeta": { type: String, required: true },
    "cvv": { type: String, required: true },
    "codigo": { type: String, required: true },
    "detalle": { type: String, required: false },
    "metodo": { type: String, required: true },
    "racaudacion": { type: String, required: false },
});

let modelo = mongoose.model('Pago', schemaPago, 'pagos');

module.exports = modelo;