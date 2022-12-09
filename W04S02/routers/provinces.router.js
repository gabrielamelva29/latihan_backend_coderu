const express = require('express')
const router = express.Router()

const {createProvince, getAllProvince, updateProvince, deleteProvince,getProvinceByID} = 
    require('../controllers/provinces.controller')

router.post('/', createProvince);
router.get('/', getAllProvince);
router.get('/:id', getProvinceByID);
router.put('/:id', updateProvince);
router.delete('/:id', deleteProvince);

module.exports = router ;