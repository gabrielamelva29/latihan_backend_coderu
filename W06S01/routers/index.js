const express = require('express')
const router = express.Router()

const user = require('./user.router')
const photo = require('./photo.router')
const comment = require('./comment.router')

router.use('/user', user)
router.use('/photo', photo)
router.use('/comment', comment)

module.exports = router