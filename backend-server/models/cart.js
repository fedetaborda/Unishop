var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estadosPermitidos = {
    values: ['Pendiente', 'Finalizado'],
    message: '{VALUE} no es un estado de venta permitido'
};

var cartSchema = new Schema({
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    productos: { type: Array, required: true },
    direccion: { type: String, required: true },
    pago: { type: String, required: true},
    idCompra: { type: String, required:true },
    estado: { type: String, default: 'Pendiente', enum: estadosPermitidos },
    fecha: { type: Date, required: false }
});

module.exports = mongoose.model('Cart', cartSchema);