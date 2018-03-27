var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productoSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre del producto es necesario'] },
    costo: { type: Number, required: [true, 'El precio de costo es necesario'] },
    precio_publico: { type: Number, required: [true, 'El precio es necesario'] },
    usuario: { 
        type: Schema.Types.ObjectId, 
        ref: 'Usuario', 
        required: [true, 'falta el usuario de carga ']},
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: [true, 'La categoria es obligatorio ']
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca',
        required: [true, 'La marca es obligatorio ']
    },
    cant_ventas: { type: Number, required: [true, 'La cantidad de ventas es requirida'] },
    estado: { type: Boolean, required: true, default: true },
    fecha: { type: Date, required: false } 
});


module.exports = mongoose.model('Producto', productoSchema);