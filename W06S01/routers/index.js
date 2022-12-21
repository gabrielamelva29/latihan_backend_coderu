const express = require('express')
const router = express.Router()

const user = require('./user.router')
const photo = require('./photo.router')

router.use('/user', user)
router.use('/photo', photo)

module.exports = router