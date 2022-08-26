const express = require('express'); //Importamos la dependencia express que permite atender peticiones (req) y devolver respuestas (res)
const router = express.Router();
const Hotel = require('../models/hotel.model');

router.post('/hotel', (req, res) => {

    let usuarioNuevo = new Hotel({

        "cedula": req.body.cedula,
        "mascota": req.body.mascota,
        "fechaentrada": req.body.fechaentrada,
        "fechasalida": req.body.fechasalida,
        "habitacion": req.body.habitacion,
        "observaciones": req.body.observaciones,
        "codigo": req.body.codigo,
        "nombre": req.body.nombre
    });

    usuarioNuevo.save(error => {
        if (error) {
            res.status(400).json({
                "msj": "La reservación no se pudo registrar",
                error
            });
        } else {
            res.status(200).json({
                "msj": "Reservación registrada correctamente"
            });
        }
    });

});

router.get('/hotel', (req, res) => {
    Hotel.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Las reservaciones no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Reservaciones listadas correctamente",
                //eliminar a contrasenia de la lista de usuarios
                lista: lista.map(mascotas => {
                    return {
                        "cedula": mascotas.cedula,
                        "mascota": mascotas.mascota,
                        "fechaentrada": mascotas.fechaentrada,
                        "fechasalida": mascotas.fechasalida,
                        "habitacion": mascotas.habitacion,
                        "observaciones": mascotas.observaciones,
                        "codigo": req.body.codigo,
                        "nombre": req.body.nombre
                    }
                })
            });
        }
    });
});



router.delete('/eliminar-mascota', (req, res) => {
    Hotel.deleteOne({ _id: req.body._id }, error => {
        if (error) {
            res.json({
                "msj": "La información no se pudo eliminar",
                error
            });
        } else {
            res.json({
                "msj": "La información fue eliminada exitosamente",
            });
        }
    });
});

module.exports = router;
//Siempre debe ir al final, si no se coloca da el siguiente error: "throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))"