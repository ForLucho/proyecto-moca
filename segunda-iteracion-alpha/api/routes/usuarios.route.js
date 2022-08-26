const express = require('express'); //Importamos la dependencia express que permite atender peticiones (req) y devolver respuestas (res)
const router = express.Router();
const Usuario = require('../models/usuarios.model');

router.post('/login', (req, res) => {
    Usuario
        .findOne({ cedula: req.body.cedula })
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    auth: false,
                    msg: 'El usuario no existe.',
                });
            }

            if (user.contrasenia !== req.body.contrasenia) {
                return res.status(401).send({
                    auth: false,
                    msg: 'Contraseña incorrecta',
                });
            }

            const sec_user = Object.assign({}, user._doc, { id: user._id }, { contrasenia: undefined }, );

            for (let key in sec_user) {
                if (/(^_)|contrasenia|secret|salt|hash/i.test(key)) {
                    delete sec_user[key];
                }
            }

            res.status(200).json([sec_user]);
        })
        .catch(err => {
            res.status(500).send(err);
        });
});

router.post('/signup', (req, res) => {

    let usuarioNuevo = new Usuario({
        "cedula": req.body.cedula,
        "usuario": req.body.tipousuario || 'cliente',
        "nombre": req.body.nombre,
        "apellido": req.body.apellido,
        "provincia": req.body.provincia,
        "correo": req.body.correo,
        "numero": req.body.numero,
        "contrasenia": req.body.contrasenia
    });

    usuarioNuevo.save(error => {
        if (error) {
            res.status(400).json({
                "msj": "El usuario no se pudo registrar",
                error
            });
        } else {
            res.status(200).json({
                "msj": "Usuario registrado correctamente"
            });
        }
    });

});

router.get('/lista-usuarios', (req, res) => {
    Usuario.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "Los usuarios no se pudieron listar",
                error
            });
        } else {
            res.json({
                "msj": "Usuarios listado correctamente",
                //eliminar a contrasenia de la lista de usuarios
                lista: lista.map(usuario => {
                    if (req.query.tipousuario) {
                        if (usuario.tipousuario === req.query.tipousuario) {
                            return {
                                "cedula": usuario.cedula,
                                "usuario": usuario.tipousuario,
                                "nombre": usuario.nombre,
                                "apellido": usuario.apellido,
                                "provincia": usuario.provincia,
                                "correo": usuario.correo,
                                "numero": usuario.numero,
                            }
                        } else {
                            return null;
                        }
                    } else {
                        return {
                            "cedula": usuario.cedula,
                            "usuario": usuario.tipousuario,
                            "nombre": usuario.nombre,
                            "apellido": usuario.apellido,
                            "provincia": usuario.provincia,
                            "correo": usuario.correo,
                            "numero": usuario.numero,
                        }
                    }
                }).filter(Boolean)
            });
        }
    });
});


module.exports = router;
//Siempre debe ir al final, si no se coloca da el siguiente error: "throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))"