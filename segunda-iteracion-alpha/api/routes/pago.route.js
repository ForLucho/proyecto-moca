const express = require('express'); //Importamos la dependencia express que permite atender peticiones (req) y devolver respuestas (res)
const router = express.Router();
const Pago = require('../models/pago.model');

router.post('/pago', (req, res) => {

    let metodoNuevo = new Pago({

        "nombre": req.body.nombre,
        "fecha": req.body.fecha,
        "numerotarjeta": req.body.numerotarjeta,
        "cvv": req.body.cvv,
        "codigo": req.body.codigo,
        "detalle": req.body.detalle,
        "metodo": req.body.metodo

    });

    metodoNuevo.save(error => {
        if (error) {
            res.status(400).json({
                "msj": "El método de pago no se pudo registrar",
                error
            });
        } else {
            res.status(200).json({
                "msj": "Método de pago registrado correctamente"
            });
        }
    });

});

router.get('/pago', (req, res) => {
    Pago.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "No se pudieron cargar los métodos de pago",
                error
            });
        } else {
            res.json({
                "msj": "Métodos de pago cargados correctamente",
                //eliminar a contrasenia de la lista de usuarios
                lista: lista.map(pago => {
                    return {
                        "nombre": pago.nombre,
                        "fecha": pago.fecha,
                        "numerotarjeta": pago.numerotarjeta,
                        "cvv": pago.cvv,
                        "codigo": pago.codigo,
                        "detalle": pago.detalle,
                        "metodo": pago.metodo

                    }
                })
            });
        }
    });
});


module.exports = router;
//Siempre debe ir al final, si no se coloca da el siguiente error: "throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))"