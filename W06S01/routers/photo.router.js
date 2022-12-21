const express = require('express')
const router = express.Router()
const {verify} = require('../middlewares/auth')

const {createPhoto, updatePhoto, getAllPhoto, getPhotoByID, deletePhoto} = 
    require('../controllers/photo.controller')

router.post('/create', verify, createPhoto);
router.put('/update/:id', verify, updatePhoto);
router.get('/getAll', verify, getAllPhoto);
router.get('/getById/:id', verify, getPhotoByID);
router.delete('/delete/:id', verify, deletePhoto);


module.exports = router;