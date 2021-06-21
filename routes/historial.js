const { Router } = require('express');
const { historialGet, historialPost} = require('../controllers/historial');     

const router = Router();

router.post('/', historialPost );

router.get('/', historialGet );

module.exports = router;