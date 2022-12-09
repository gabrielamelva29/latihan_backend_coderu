const express = require('express')
const router = express.Router()
const province = require('./province.router')
const regency = require('./regency.router')
const todo = require('./todo.router')
const provinces = require('./provinces.router')
const regencies = require('./regencys.router')

router.use('/province', province)
router.use('/regency', regency)
router.use('/todo', todo)
router.use('/provinces', provinces)
router.use('/regencies', regencies)

module.exports = router