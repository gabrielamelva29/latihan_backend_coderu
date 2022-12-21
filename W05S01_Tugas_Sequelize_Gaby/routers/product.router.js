const express = require('express')
const router = express.Router()

const {createProduct, getAllProduct, updateProduct, deleteProduct, getProductByID} = 
    require('../controllers/product.controller')

router.post('/', createProduct);
router.get('/', getAllProduct);
router.get('/:id', getProductByID);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router ;