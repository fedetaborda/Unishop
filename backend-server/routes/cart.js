var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mdAutenticacion = require('../middlewares/autenticacion');

var app = express();

var moment = require('moment');

var Cart = require('../models/cart');

var Usuario = require('../models/usuario');

var Producto = require('../models/producto');

var validate;

moment.locale('es');

// ==========================================
// Obtener compras idVenta
// ==========================================
app.post('/num-compra/', mdAutenticacion.verificaToken, (req, res) => {

    var body = req.body;

    /* filtra por id de compra y usuario logueado */
    Cart.find({ idCompra: body.id, usuario: req.usuario._id })

    .exec((err, cart) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar la compra',
                errors: err
            });
        }

        if (!cart) {
            return res.status(400).json({
                ok: false,
                mensaje: 'La compra con el id ' + id + ' no existe'
            });
        }

        res.status(200).json({
            ok: true,
            cart: cart

        });
    })


});


// ==========================================
// Obtener cantidad de copras realizadas
// ==========================================
app.get('/cant-compras', mdAutenticacion.verificaToken, (req, res) => {


    var id = req.usuario._id;

    Cart.count({ usuario: id }, (err, conteo) => {

        res.status(200).json({
            ok: true,
            total_ventas: conteo,
        });

    })
});


// ==========================================
// Obtener compras por usuario (todos los estados)
// ==========================================
app.get('/:id', (req, res) => {

    var id = req.params.id;

    Cart.find({ usuario: id })
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
                    mensaje: 'La compra con el id ' + id + ' no existe'
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

    var producStock = body.productos;

    var cart = new Cart({
        usuario: req.usuario._id,
        direccion: body.direccion,
        pago: body.pago,
        idCompra: body.idCompra,
        productos: body.productos,
        subTotal: body.subTotal,
        estado: body.estado,
        fecha: moment().format('DD-MM-YYYY'),
        hora: moment().format('HH:mm')
    });



    function addcart(callback) {

        producStock.forEach(element => {

            var id = element._id;

            //var nombre = element.nombre;

            Producto.findById(id, (err, producto) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error al buscar producto',
                        errors: err
                    })
                }

                if (!producto) {
                    return res.status(400).json({
                        ok: true,
                        mensaje: 'Producto no existente con ese ID',
                        errors: { message: 'No existe el producto' }
                    });
                }

                if (element.cantidad <= producto.stock) {

                    producto.stock = (producto.stock - element.cantidad);

                    return callback(null, true);


                } else {

                    return callback(null, false);

                }

            });

        });


    }


    addcart((err, data) => {

        if (err) return console.log(err.message);

        if (data) {

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
                    cart: cartGuardado,
                });

            });

        } else {

            return res.status(400).json({
                ok: false,
                mensaje: 'Existen Productos fuera de Stock',
            });

        }

    });


    /*  if (stock(producStock, res)) {


      } */


    /*  if (validate == false) {

          console.log('no tiene stock');

          return res.status(400).json({
              ok: false,
              mensaje: 'Existen Productos fuera de Stock',
          });


      } else {

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
                  cart: cartGuardado,
              });

          });

      } */


});











module.exports = app;