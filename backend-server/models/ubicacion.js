var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ubicacionSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'falta el usuario de carga']
    },
    direccion: { type: String, required: [true, 'Una nueva direccion es necesaria'] },
    altura: { type: Number, required: [true, 'La Altura es necesaria'] },
    ubicacion_tipo: { type: String, required: [true, 'Debe ingresar un tipo de Ubicacion'] },
    entre_calles: { type: String, required: false },
    piso: { type: String, required: false },
    fecha: { type: Date, required: true }
});

module.exports = mongoose.model('Ubicacion', ubicacionSchema);