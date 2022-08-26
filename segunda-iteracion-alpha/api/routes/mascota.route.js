const express = require('express'); //Importamos la dependencia express que permite atender peticiones (req) y devolver respuestas (res)
const router = express.Router();
const Mascota = require('../models/mascota.model');

router.post('/mascota', (req, res) => {

    let usuarioNuevo = new Mascota({

        "nombre": req.body.nombre,
        "estado": req.body.estado,
        "direccion": req.body.direccion,
        "dueño": req.body.dueño,
        "telefono": req.body.telefono,
    });

    usuarioNuevo.save(error => {
        if (error) {
            res.status(400).json({
                "msj": "La reservación no se pudo registrar",
                error
            });
        } else {
            res.status(200).json({
                "msj": "Mascota registrada correctamente"
            });
        }
    });

});

router.get('/mascota', (req, res) => {
    Mascota.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Las Mascotas no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Mascotas listadas correctamente",
                //eliminar a contrasenia de la lista de usuarios
                lista: lista.map(mascotas => {
                    return {
                        "_id": mascotas._id,
                        "nombre": mascotas.nombre,
                        "estado": mascotas.estado,
                        "direccion": mascotas.direccion,
                        "dueño": mascotas.dueño,
                        "telefono": mascotas.telefono,                       
                    }
                })
            });
        }
    });
});


module.exports = router;
//Siempre debe ir al final, si no se coloca da el siguiente error: "throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))"