const express = require('express')
const router = express.Router()
const province = require('./province.router')
const regency = require('./regency.router')

router.use('/province', province)
router.use('/regency', regency)

module.exports = router