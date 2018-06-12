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

    if (body.imagen) {
        console.log(body.imagen);
    }

    var producto = new Producto({
        nombre: body.nombre,
        costo: body.costo,
        cantidad: 1,
        precio: body.precio,
        precio_desc: body.precio_desc,
        descuento: body.descuento,
        rango: body.rango,
        usuario: req.usuario._id,
        categoria: body.categoria,
        marca: body.marca.id,
        estado: body.estado,
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
//  Obtener Producto por ID
// ==========================================
app.get('/:id', (req, res) => {

    var id = req.params.id;

    Producto.findById(id)
        .populate('usuario', 'nombre img email')
        .exec((err, producto) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el Producto',
                    errors: err
                });
            }

            if (!producto) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'El producto con el id ' + id + 'no existe',
                    errors: { message: 'No existe un producto con ese ID' }
                });
            }
            res.status(200).json({
                ok: true,
                producto: producto
            });
        })
})


// ==========================================
// Obtener todos los productos
// ==========================================
app.get('/', (req, res, next) => {

    var desde = req.query.desde || 0;
    desde = Number(desde);

    Producto.find({})
        .skip(desde)
        .limit(100)
        .populate('categoria')
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
                        total: conteo,
                    });

                })


            });

});



module.exports = app;