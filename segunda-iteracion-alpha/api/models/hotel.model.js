const mongoose = require('mongoose');

const schemaHotel = mongoose.Schema({
    "cedula": { type: String, required: false },
    "mascota": { type: String, required: true },
    "fechaentrada": { type: Date, required: true },
    "fechasalida": { type: Date, required: true },
    "habitacion": { type: String, required: true },
    "observaciones": { type: String, required: true },
    "codigo": { type: String, required: false },
    "nombre": { type: String, required: false },




});

let modelo = mongoose.model('Hotel', schemaHotel, 'hoteles');

module.exports = modelo;