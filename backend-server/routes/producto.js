var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mdAutenticacion = require('../middlewares/autenticacion');

var app = express();

var moment = require('moment');


var Producto = require('../models/producto');


// ==========================================
// Crear un nuevo producto
// ==========================================
app.post('/', mdAutenticacion.verificaToken, (req, res) => {

    var body = req.body;

    var producto = new Producto({
        nombre: body.nombre,
        costo: body.costo,
        precio: body.precio,
        precio_desc: body.precio_desc,
        descuento: body.descuento,
        usuario: req.usuario._id,
        categoria: body.categoria,
        marca: body.marca.id,
        estado: body.estado,
        img: body.img,
        descripcion: body.descripcion,
        fecha: moment().format('L')
    });

    producto.save((err, productoGuardado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear producto',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            producto: productoGuardado
        });


    });

});

// ==========================================
// Obtener todas las categoria
// ==========================================
app.get('/', (req, res, next) => {

    var desde = req.query.desde || 0;
    desde = Number(desde);

    Producto.find({})
        .skip(desde)
        .limit(5)
        .populate('producto')
        .exec(
            (err, productos) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando productos',
                        errors: err
                    });
                }

                Producto.count({}, (err, conteo) => {
                    res.status(200).json({
                        ok: true,
                        productos: productos,
                        total: conteo
                    });

                })

            });

});


module.exports = app;