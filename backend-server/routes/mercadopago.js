var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mdAutenticacion = require('../middlewares/autenticacion');

// var Mercadopago = require('../models/mercadopago');

var app = express();

var mercadopago = require('mercadopago');





// ==========================================
// Crear preference
// ==========================================

app.post('/', (req, res) => {

    mercadopago.configure({
        client_id: '3640873518284384',
        client_secret: 'rCZUFGASCQgdT4faYuyMJdq5ClFGDnsB'
    });

    var body = req.body;


    // Create a preference structure
    preference = {
        items: [
            item = {
                id: '8d5dffd8hsgd9fsf7',
                title: 'Compra ONLINE NEGOCIO(1)',
                quantity: 1,
                currency_id: 'ARS',
                unit_price: body.total
            }
        ],
        payer: {
            email: body.email
        }
    };


    mercadopago.preferences.create(preference)
        .then(function(preference) {
            // Do something if preference has been created successfully

            res.status(201).json({
                ok: true,
                preference: preference
            });


        }).catch(function(error) {
            // If an error has occurred
            res.status(500).json({
                ok: false,
                estado: error
            });
        });

});



module.exports = app;