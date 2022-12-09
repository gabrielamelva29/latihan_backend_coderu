const express = require('express')
const router = express.Router()

const {getToDo, postToDo, updateToDo, deleteToDo} = 
    require('../controllers/todo.controller')

router.get('/', getToDo);
router.post('/', postToDo);
router.put('/:id', updateToDo);
router.delete('/:id', deleteToDo);

module.exports = router ;