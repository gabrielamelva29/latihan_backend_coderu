const express = require('express')
const router = express.Router()

const {getRegenciesToDo, postRegenciesToDo, updateRegenciesToDo, deleteRegenciesToDo, getRegenciesToDoByID} = 
    require('../controllers/regencys.controller')

router.get('/', getRegenciesToDo);
router.get('/:id', getRegenciesToDoByID);
router.post('/', postRegenciesToDo);
router.put('/:id', updateRegenciesToDo);
router.delete('/:id', deleteRegenciesToDo);

module.exports = router ;