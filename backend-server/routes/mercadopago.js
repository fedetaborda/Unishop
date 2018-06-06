var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mdAutenticacion = require('../middlewares/autenticacion');

var app = express();

var mercadopago = require('mercadopago');

mercadopago.configure({
    client_id: '3640873518284384',
    client_secret: 'rCZUFGASCQgdT4faYuyMJdq5ClFGDnsB'
});


// ==========================================
// Crear preference
// ==========================================

app.get('/', (req, res, next) => {

    // Create a preference structure
    var preference = {
        items: [
            item = {
                id: '1234',
                title: 'Ergonomic Aluminum Shirt',
                quantity: 6,
                currency_id: 'ARS',
                unit_price: 69.86
            }
        ],
        payer: {
            email: 'federicomartin2003@hotmail.com'
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