const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.formularioPath = '/api/formulario';
        this.expClinPath = '/api/expediente-clinico';
        this.historialPath = '/api/historial';

        // Middlewares
        this.middlewares();
        //Conectar a base de datos
        this.conectarDB();
        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB () {
        await dbConnection();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );
        // Lectura y parseo del body
        this.app.use( express.json() );
        // Directorio Público
        this.app.use( express.static('public') );
        //Home 
        this.app.use(express.static(__dirname + '/public'));
    }

    routes() {
        this.app.use( this.usuariosPath, require('../routes/usuarios'));
        this.app.use( this.formularioPath, require('../routes/formulario'));
        this.app.use( this.expClinPath, require('../routes/expClin'));
        this.app.use( this.historialPath, require('../routes/historial'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
