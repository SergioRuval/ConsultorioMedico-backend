const { response, request } = require('express');
const ExpClin = require('../models/expClin');
//const IdPac = require('../models/idPac');

const expClinGet = async (req = request, res = response) => {
    const expClin = await ExpClin.find()

    res.json({expClin});
}

//let hstNombre = 'Aun no hay información';
//let id_p = 'Aun no hay id';

const expClinPost = async (req, res = response) => {
    
    const {clave,name, genero, ocupa, lNac, nac, alim, habitos, 
    alergias, antMed, antPad, diagAnt, medAnt} = req.body;
    const expClin = new ExpClin ({clave,name, genero, ocupa, lNac, nac, alim, habitos, 
        alergias, antMed, antPad, diagAnt, medAnt});

    await expClin.save();
  
    res.json({
        msg: 'post API - ExpedienteClinicoPost',
        expClin: expClin,
    });
}


const expClinPut = async (req, res = response) => {

    const { clave, diagAnt, medAnt} = req.body;
    console.log(clave);

    const expclin = await ExpClin.findOneAndUpdate(
        {
            clave: clave
        },
        {
            diagAnt: diagAnt, 
            medAnt: medAnt
        },
        {
            upsert: true,
            new: true
        }, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
        console.log(doc);
    });
        
    res.json({
        expclin
    });
}

module.exports = {
    expClinGet,
    expClinPost,
    expClinPut
}