const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generarJWT');
const passport = require("passport");
const jwt = require('jsonwebtoken');

const usuariosPost = async (req, res = response) => {

    const nombre = req.body.nombre;
    const correo = req.body.correo;
    const password = bcryptjs.hashSync(req.body.password);
    const role = req.body.role;
    
    const usuario = new Usuario({nombre, correo, password, role});

    //Veificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if(existeEmail){
        return res.status(400).json({
            msg: 'Ese correo ya esta registrado'
        })
    }
    await usuario.save();

    res.json({
        usuario
    });
    
}

const usuariosLogin = async (req, res, nex )=>{

    const { correo, password, role } = req.body;

    try {
    //Verficar si el email existe
        const usuario = await Usuario.findOne({correo})
        const validPassword = bcryptjs.compareSync( password, usuario.password );
        if(!usuario || !validPassword || usuario.role != role){
            if(usuario.role != role){
                return res.status(400).json({msg:'role incorrecto'})
            }else{
                return res.status(400).json({msg:'usuario / password son incorrectos'});
            }
        }else{
            if(!usuario.estado){
                await Usuario.updateOne({ correo: usuario.correo }, { $set: { estado: true } }, function(err, res) {
                    if(err) throw err;
                    console.log("Estado actualizado");
                });
            }
        }
    //Verificar la contraseña

        
    /*Veficiar si es un correo valido
        if(!usuario.valido){
            return res.status(400).json({msg:'Aun no confirma su correo'})
        }*/
    //Generar el JWT
        // const token = await generarJWT ( usuario.id );

    // Cambiar el estado de inactivo a activo

        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({ id: usuario.id }, process.env.SECRETORPRIVATEKEY, { expiresIn: expiresIn });
        
        res.json({
            usuario,
            accessToken,
            expiresIn
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    usuariosPost,
    usuariosLogin
}