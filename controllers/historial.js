const { response, request } = require('express');
const Historial = require('../models/historial');
const expClin = require('../models/expClin');


const historialGet = async (req = request, res = response) => {
    
    const historial = await Historial.find();

    res.json({historial});
}

const historialPost = async (req, res = response) => {

    const {nombre, diag, medic, fecha} = req.body;
    
    expClin.findOne({ name: nombre }, async (err, expClin) => {
        
        if (err) return res.status(500).send('Server error!');

        const historial = new Historial ({nombre, diag, medic, fecha });
        await historial.save();


        res.json({historial});
    });
}

module.exports = {
    historialGet,
    historialPost
}
