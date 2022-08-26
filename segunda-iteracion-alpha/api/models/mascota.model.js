const mongoose = require('mongoose');

const schemaMascota = mongoose.Schema({
    "nombre": { type: String, required: true },
    "estado": { type: String, required: true },
    "direccion": { type: String, required: true },
    "dueño": { type: String, required: true },
    "telefono": { type: String, required: true },
});

let modelo = mongoose.model('Mascota', schemaMascota, 'mascotas');

module.exports = modelo;