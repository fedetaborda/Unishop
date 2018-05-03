var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estadosPermitidos = {
    values: ['Pendiente', 'Finalizado'],
    message: '{VALUE} no es un estado de venta permitido'
};

var cartSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    producto: { type: Schema.Types.ObjectId, ref: 'Producto' },
    estado: { type: String, default: 'Pendiente', enum: estadosPermitidos },
    fecha: { type: Date, required: false }
});

module.exports = mongoose.model('Cart', cartSchema);