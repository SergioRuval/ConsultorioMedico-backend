const { Schema, model } = require('mongoose');

const HistorialSchema = Schema ({
    nombre:{
        type:String,
        required: true
    },
    diag:{
        type:String,
        required: true
    },
    medic:{
        type:String,
        required: true
    },
    fecha:{
        type: String,
        required: true
    }
});

module.exports = model('Historial', HistorialSchema);