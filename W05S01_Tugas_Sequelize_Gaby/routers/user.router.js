const express = require('express')
const router = express.Router()

const {createUser, getAllUser, updateUser, deleteUser,getUserByID} = 
    require('../controllers/user.controller')

router.post('/', createUser);
router.get('/', getAllUser);
router.get('/:id', getUserByID);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router ;