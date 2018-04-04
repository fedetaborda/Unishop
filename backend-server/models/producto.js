var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var productoSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre del producto es necesario'] },
    costo: { type: Number, required: [false, 'El precio de costo es necesario'] },
    precio: { type: Number, required: [false, 'El precio es necesario'] },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'falta el usuario de carga']
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: [true, 'La categoria es obligatorio']
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca',
        required: [false, 'La marca es obligatorio']
    },
    precio_desc: { type: Number, required: false },
    descuento: { type: Number, required: false },
    estado: { type: Boolean, required: true, default: true },
    descripcion: { type: String, required: false },
    fecha: { type: Date, required: false }
});


module.exports = mongoose.model('Producto', productoSchema);