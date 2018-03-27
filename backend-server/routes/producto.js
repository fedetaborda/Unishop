var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mdAutenticacion = require('../middlewares/autenticacion');

var app = express();

var Producto = require('../models/producto');


// ==========================================
// Crear un nuevo producto
// ==========================================
app.post('/', mdAutenticacion.verificaToken , (req, res) => {

    var body = req.body;

    var producto = new Producto({
        nombre: body.nombre,
        costo: body.costo,
        precio_publico: body.precio_publico,
        usuario: req.usuario.id,
        categoria: req.categoria.id,
        marca: req.marca.id,
        cant_ventas: body.cant_ventas,
        estado: body.estado,
        img: body.img,
        fecha: body.fecha
    });

    producto.save((err, productoGuardado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear producto',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            producto: usuarioGuardado
        });


    });

});


module.exports = app;