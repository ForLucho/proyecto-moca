const express = require('express'); //Importamos la dependencia express que permite atender peticiones (req) y devolver respuestas (res)
const router = express.Router();
const Cita = require('../models/cita.model');

router.post('/cita', (req, res) => {

    let usuarioNuevo = new Cita({
        "cedula": req.body.cedula,
        "mascota": req.body.mascota,
        "fecha": req.body.fecha,
        "motivo": req.body.motivo,
        "hora": req.body.hora,
        "observaciones": req.body.observaciones,
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

router.get('/cita', (req, res) => {
    Cita.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Las reservaciones no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Reservaciones listadas correctamente",
                //eliminar a contrasenia de la lista de usuarios
                lista: lista.map(citas => {
                    return {
                        "cedula": citas.cedula,
                        "mascota": citas.mascota,
                        "fecha": citas.fecha,
                        "motivo": citas.motivo,
                        "hora": citas.hora,
                        "observaciones": citas.observaciones,
                    }
                })
            });
        }
    });
});


module.exports = router;
//Siempre debe ir al final, si no se coloca da el siguiente error: "throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))"