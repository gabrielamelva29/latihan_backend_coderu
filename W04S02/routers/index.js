const express = require('express')
const router = express.Router()
const user = require('./user.router')
const provinces = require('./provinces.router')
const regencys = require('./regencys.router')

router.use('/user', user)
router.use('/provinces', provinces)
router.use('/regencys', regencys)

module.exports = router