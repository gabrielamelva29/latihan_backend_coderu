const express = require('express')
const router = express.Router()
const {verify} = require('../middlewares/auth')

const {createComment} = 
    require('../controllers/comment.controller')

router.post('/create', verify, createComment);

module.exports = router;