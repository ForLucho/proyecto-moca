const express = require('express'); //Importamos la dependencia express que permite atender peticiones (req) y devolver respuestas (res)
const router = express.Router();
const Ranking = require('../models/rankingmedico.model');

router.post('/ranking-medico', (req, res) => {

    let rankingNuevo = new Ranking({

        "cedula": req.body.cedula,
        "nombre": req.body.nombre,                 
        "ranking": req.body.ranking,
        "mensaje": req.body.mensaje,

    });

    rankingNuevo.save(error => {
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

router.get('/ranking-medico', (req, res) => {
    Ranking.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Los rankings no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Rankings listadas correctamente",
                //eliminar a contrasenia de la lista de usuarios
                lista: lista.map(ranking => {
                    return {
                        "cedula": ranking.cedula,
                        "nombre": ranking.nombre,
                        "ranking": ranking.ranking,
                        "mensaje": ranking.mensaje,    
                    }
                })
            });
        }
    });
});


module.exports = router;
//Siempre debe ir al final, si no se coloca da el siguiente error: "throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))"