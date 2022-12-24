const express = require('express')
const router = express.Router()

const {create, get, update, deleteData} = 
    require('../controllers/todo.controller')

router.post('/', create);
router.get('/', get);
router.put('/:id', update);
router.delete('/:id', deleteData);

module.exports = router ;