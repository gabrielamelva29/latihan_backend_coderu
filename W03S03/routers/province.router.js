const express=require('express')
const router=express.Router()
const fs = require('fs');
const {getListProvince, getProvinceByID, createProvince, updateProvince, deleteProvince, findProvinceByRegencyName}=require('../controllers/province.controller')

router.get('/', getListProvince)

//GET PROVINCEBYID
router.get('/:id', getProvinceByID)

//POSTPROVINCE
router.post('/', createProvince)

//UPDATEPROVINCE
router.put('/:id', updateProvince)

//DELETE PROVINCE
router.delete('/:id', deleteProvince)

//get province by regency name
router.get('/ProvByRegName/:id', findProvinceByRegencyName)

module.exports=router