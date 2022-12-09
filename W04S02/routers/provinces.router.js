const express = require('express')
const router = express.Router()

const {createProvince, getAllProvince, updateProvince, deleteProvince} = 
    require('../controllers/provinces.controller')

router.post('/', createProvince);
router.get('/', getAllProvince);
router.put('/:id', updateProvince);
router.delete('/:id', deleteProvince);

module.exports = router ;