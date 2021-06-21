const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required: [true, 'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required: [true, 'La contraseña es obligatoria']
    },
    role:{
        type: String,
        required: true,
        enum: ['DOCTOR_ROLE', 'ENF_ROLE', 'PAC_ROLE']
    },
    valido:{
        type:Boolean,
        default: false
    },
    estado:{
        type: Boolean,
        default: false
    }
    

});

module.exports = model('Usuarios', UsuarioSchema);