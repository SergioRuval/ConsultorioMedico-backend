const { Router } = require('express');
const { formularioGet,
        formularioPost } = require('../controllers/formulario');    

const router = Router();


router.get('/', formularioGet );

router.post('/', formularioPost );


module.exports = router;

