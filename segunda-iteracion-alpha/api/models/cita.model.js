const mongoose = require('mongoose');

const schemaCita = mongoose.Schema({
    "cedula": { type: String, required: false },
    "mascota": { type: String, required: true },
    "fecha": { type: Date, required: true },
    "motivo": { type: String, required: true },
    "hora": { type: String, required: true },
    "observaciones": { type: String, required: true },
});

let modelo = mongoose.model('Cita', schemaCita, 'citas');

module.exports = modelo;