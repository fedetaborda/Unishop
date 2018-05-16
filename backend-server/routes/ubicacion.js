var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mdAutenticacion = require('../middlewares/autenticacion');

var app = express();

var moment = require('moment');

var Ubicacion = require('../models/ubicacion');


// ==========================================
// Crear un nueva Ubicacion
// ==========================================
app.post('/', mdAutenticacion.verificaToken, (req, res) => {

    var body = req.body;

    var ubicacion = new Ubicacion({
        usuario: req.usuario._id,
        direccion: body.direccion,
        altura: body.altura,
        ubicacion_tipo: body.ubicacion_tipo,
        entre_calles: body.entre_calles,
        piso: body.piso,
        fecha: moment().format('L')
    });

    ubicacion.save((err, ubicacionGuardada) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al cargar la ubicacion',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            ubicacion: ubicacionGuardada
        });


    });

});


// ============================================
//   Borrar una ubicacion por el id
// ============================================
app.delete('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;

    Ubicacion.findByIdAndRemove(id, (err, ubicacionBorrado) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al borrar la ubicacion',
                errors: err
            });
        }

        if (!ubicacionBorrado) {
            return res.status(400).json({
                ok: false,
                mensaje: 'No existe una ubicacion con ese id'
            });
        }

        res.status(200).json({
            ok: true,
            ubicacion_borrada: ubicacionBorrado
        });

    });

});

// ==========================================
// Obtener todas las ubicaciones
// ==========================================
app.get('/', (req, res, next) => {

    var desde = req.query.desde || 0;
    desde = Number(desde);

    Ubicacion.find({})
        .skip(desde)
        .limit(10)
        .populate('ubicacion')
        .exec(
            (err, ubicacion) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando ubicacion',
                        errors: err
                    });
                }

                Ubicacion.count({}, (err, conteo) => {
                    res.status(200).json({
                        ok: true,
                        ubicacion: ubicacion,
                        total: conteo
                    });

                })

            });

});

// ==========================================
// Obtener ubicacion
// ==========================================
app.get('/:id', (req, res) => {

    var id = req.params.id;

    Ubicacion.findById(id)
        .populate('ubicacion')
        .exec((err, ubicacion) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar ubicacion',
                    errors: err
                });
            }

            if (!ubicacion) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'La ubicacion con el id ' + id + ' no existe'
                });
            }

            res.status(200).json({
                ok: true,
                ubicacion: ubicacion
            });

        })


});

/*
// ==========================================
// Actualizar Categoria
// ==========================================
app.put('/:id', mdAutenticacion.verificaToken, (req, res) => {

    var id = req.params.id;
    var body = req.body;

    Categoria.findById(id, (err, categoria) => {


        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar categoria',
                errors: err
            });
        }

        if (!categoria) {
            return res.status(400).json({
                ok: false,
                mensaje: 'La categoria con el id ' + id + ' no existe',
                errors: { message: 'No existe la categoria con ese ID' }
            });
        }


        categoria.nombre = body.nombre;
        categoria.estado = body.estado;


        categoria.save((err, categoriaGuardada) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al actualizar la categoria',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                categoria: categoriaGuardada
            });

        });

    });

});


*/

module.exports = app;