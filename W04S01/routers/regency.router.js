const express=require('express')
const router=express.Router()
const fs = require('fs');
const { getListRegency, getRegencyByID, createRegency, updateRegency, deleteRegency, findRegencyByProvinceID, findRegencyByProvinceName } = require('../controllers/regency.controller');

//get list regency
router.get('/', getListRegency)

//GET REGENCYBYID
router.get('/:id', getRegencyByID)

//POSTREGENCY
router.post('/', createRegency)

//UPDATEREGENCY
router.put('/:id', updateRegency)

//DELETE REGENCY
router.delete('/:id', deleteRegency)

//get REGENCY by PROVINCE ID
router.get('/RegByProvID/:id', findRegencyByProvinceID)

//get REGENCY by PROVINCE name
router.get('/RegByProvName/:id', findRegencyByProvinceName)

module.exports=router