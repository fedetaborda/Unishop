var express = require('express');

var app = express();

var Producto = require('../models/producto');

// ==============================
// Busqueda por colección
// ==============================
/*app.get('/coleccion/:tabla/:busqueda', (req, res) => {

    var busqueda = req.params.busqueda;
    var tabla = req.params.tabla;
    var regex = new RegExp(busqueda, 'i');

    var promesa;

    switch (tabla) {

        case 'usuarios':
            promesa = buscarUsuarios(busqueda, regex);
            break;

        case 'medicos':
            promesa = buscarMedicos(busqueda, regex);
            break;

        case 'hospitales':
            promesa = buscarHospitales(busqueda, regex);
            break;

        default:
            return res.status(400).json({
                ok: false,
                mensaje: 'Los tipos de busqueda sólo son: usuarios, medicos y hospitales',
                error: { message: 'Tipo de tabla/coleccion no válido' }
            });

    }

    promesa.then(data => {

        res.status(200).json({
            ok: true,
            [tabla]: data
        });

    })

});*/


// ==============================
// Busqueda general
// ==============================
app.get('/producto/:busqueda', (req, res, next) => {

    var busqueda = req.params.busqueda;
    var regex = new RegExp(busqueda, 'i');


    Promise.race([
            buscarProducto(busqueda, regex)
        ])
        .then(respuesta => {

            res.status(200).json({
                ok: true,
                producto: respuesta
            });
        });


});


function buscarProducto(busqueda, regex) {

    return new Promise((resolve, reject) => {

        Producto.find({ nombre: regex })
            .populate('productos')
            .exec((err, productos) => {

                if (err) {
                    reject('Error al cargar productos', err);
                } else {
                    resolve(productos);
                }
            });
    });
}



module.exports = app;