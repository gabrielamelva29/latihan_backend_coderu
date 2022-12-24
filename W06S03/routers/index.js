const express = require('express')
const router = express.Router()

const todo = require('./todo.router')
const movie = require('./movie.router')

router.use('/todo', todo)
router.use('/movie', movie)

module.exports = router