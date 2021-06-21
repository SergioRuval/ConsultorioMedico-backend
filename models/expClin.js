const { Schema, model } = require('mongoose');

const ExpClinSchema = Schema({
    clave:{
      type: Number,
      require: true
    },
    name: {
        type: String,
        required: true,
        trim: true
      },
      genero: {
        type: String,
        required: true,
        trim: true
      },
      ocupa: {
        type: String,
        required: true,
        trim: true
      },
      lNac: {
        type: String,
        required: true,
        trim: true
      },
      nac: {
        type: String,
        required: true,
        trim: true
      },
      alim: {
        type: String,
        required: true,
        trim: true
      },
      habitos: {
        type: String,
        required: true,
        trim: true
      },
      alergias: {
        type: String,
        required: true,
        trim: true
      },
      antMed: {
        type: String,
        required: true,
        trim: true
      },
      antPad: {
        type: String,
        required: true,
        trim: true
      },
      diagAnt: {
        type: String,
        required: true,
        trim: true
      },
      medAnt: {
        type: String,
        required: true,
        trim: true
      },
      estado:{
        type: Boolean,
        default: true
      }
});

module.exports = model('ExpClins', ExpClinSchema);