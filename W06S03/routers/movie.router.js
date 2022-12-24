const express = require('express')
const router = express.Router()

const {create, get, update, deleteData, review} = 
    require('../controllers/movie.controller')

router.post('/', create);
router.get('/', get);
router.put('/:id', update);
router.delete('/:id', deleteData);
router.post('/review/:id', review);

module.exports = router ;