var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mdAutenticacion = require('../middlewares/autenticacion');

var app = express();

var moment = require('moment');

var Cart = require('../models/cart');

moment.locale('es');

// ==========================================
// Obtener compras por usuario (todos los estados)
// ==========================================
app.get('/:id', (req, res) => {

    var id = req.params.id;

    Cart.find({ usuario: id })
        .populate('usuario')
        .exec((err, cart) => {

            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el pedido',
                    errors: err
                });
            }

            if (!cart) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'el usuario con el id ' + id + ' no existe'
                });
            }

            res.status(200).json({
                ok: true,
                cart: cart
            });

        })


});

// ==========================================
// Add Producto Carrito
// ==========================================
app.post('/', mdAutenticacion.verificaToken, (req, res) => {

    

    var body = req.body;

    var cart = new Cart({
        usuario: req.usuario._id,
        direccion: body.direccion,
        pago: body.pago,
        idCompra: body.idCompra,
        productos: body.productos,
        estado: body.estado,
        fecha: moment().format('DD-MM-YYYY'),
        hora: moment().format('HH:mm')
    });

    console.log('cart',cart);

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
            cart: cartGuardado
        });


    });

});


module.exports = app;