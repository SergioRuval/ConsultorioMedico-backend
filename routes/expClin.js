const { Router } = require('express');

const { expClinGet,
        expClinPut,
        expClinPost } = require('../controllers/expClin');     

const router = Router();

router.get('/', expClinGet );

router.put('/', expClinPut );

router.post('/', expClinPost );


module.exports = router;