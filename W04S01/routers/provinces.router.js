const express = require('express')
const router = express.Router()

const {getProvincesToDo, postProvincesToDo, updateProvincesToDo, deleteProvincesToDo, getProvincesToDoByID, getProvincesToDoByRegencyName} = 
    require('../controllers/provinces.controller')

router.get('/', getProvincesToDo);
router.get('/:id', getProvincesToDoByID);
router.post('/', postProvincesToDo);
router.put('/:id', updateProvincesToDo);
router.delete('/:id', deleteProvincesToDo);
router.delete('/:id', getProvincesToDoByRegencyName);

module.exports = router ;