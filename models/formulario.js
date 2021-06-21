const { Schema, model } = require('mongoose');

const FormularioSchema = Schema ({
    clave:{
        type: Number,
        required: true 
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    motivo:{
        type: String,
        required: true,
        trim: true,
    },
    peso: {
        type: String,
        required: true,
        trim: true
    },
    talla: {
        type: String,
        required: true,
        trim: true
    },
    temperatura: {
        type: String,
        required: true,
        trim: true
    },
    preArterial: {
        type: String,
        required: true,
        trim: true
    }, 
    pulso: {
        type: String,
        required: true,
        trim: true
    },
    estado:{
        type: Boolean,
        default: true
      }
});

module.exports = model('Formularios', FormularioSchema);