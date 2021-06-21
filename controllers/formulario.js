const { response, request } = require('express');
const expClin = require('../models/expClin');
const Formulario = require('../models/formulario');


const formularioGet = async (req = request, res = response) => {
    const {clave = 1} = req.query;
    const formulario = await Formulario.find({clave})

    res.json({formulario});
}

const formularioPost = (req, res = response) => {
    
    const {name, motivo, peso, talla, temperatura, preArterial, pulso} = req.body;

        expClin.findOne({ name: name }, async (err, expClin) => {
            let clave = expClin.clave;
            if (err) return res.status(500).send('Server error!');
            
            
            
            // if(name == expClin.name){   
                const formulario = new Formulario({clave, name, motivo, peso, talla, temperatura, preArterial, pulso});

                await formulario.save();

                res.json({
                     formulario
                });
            // }else{
                // res.status(409).send({ message: 'Está persona no esta dada de alta en el sistema.' });
            // }
            
        });
}



module.exports = {
    formularioGet,
    formularioPost
}
