var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mdAutenticacion = require('../middlewares/autenticacion');

var app = express();

var moment = require('moment');

var Cart = require('../models/cart');

// ==========================================
// Obtener todas las compras
// ==========================================
app.get('/', (req, res, next) => {

    var desde = req.query.desde || 0;
    desde = Number(desde);

    Cart.find({})
        .skip(desde)
        .limit(50)
        .populate('producto')
        .populate('usuario', 'nombre apellido email telefono')
        .exec(
            (err, compras) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando compras',
                        errors: err
                    });
                }

                Cart.count({}, (err, conteo) => {
                    res.status(200).json({
                        ok: true,
                        compras: compras,
                        total: conteo
                    });

                })

            });

});

// ==========================================
// Add Producto Carrito
// ==========================================
app.post('/', mdAutenticacion.verificaToken, (req, res) => {

    var body = req.body;

    var cart = new Cart({
        usuario: req.usuario._id,
        producto: body.producto,
        estado: body.estado,
        fecha: moment().format('L')
    });

    cart.save((err, cartGuardado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear compra',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            carrito: cartGuardado
        });


    });

});


module.exports = app;