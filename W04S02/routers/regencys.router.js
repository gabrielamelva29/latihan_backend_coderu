const express = require('express')
const router = express.Router()

const {createRegency, getAllRegency, updateRegency, deleteRegency} = 
    require('../controllers/regencys.controller')

router.post('/', createRegency);
router.get('/', getAllRegency);
router.put('/:id', updateRegency);
router.delete('/:id', deleteRegency);

module.exports = router ;