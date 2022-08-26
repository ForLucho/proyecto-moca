const mongoose = require('mongoose');

const schemaUsuario = mongoose.Schema({
    "cedula": { type: String, required: true, unique: true },
    "usuario": { type: String, required: true },
    "nombre": { type: String, required: true },
    "apellido": { type: String, required: true },
    "provincia": { type: String, required: true },
    "correo": { type: String, required: true },
    "numero": { type: String, required: true },
    "contrasenia": { type: String, required: true }
});

let modelo = mongoose.model('Usuario', schemaUsuario, 'usuarios');

module.exports = modelo;