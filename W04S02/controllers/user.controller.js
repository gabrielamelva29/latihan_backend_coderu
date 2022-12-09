const fs = require('fs')
const db = require("../config/db");
const { User } = require('../models')

const createUser = async (req, res) => {
    const body = req.body;

    User.create({
        username: body.username,
        password: body.password,
        email: body.email
    })
        .then(user => {
            res.status(200).json({
                message: "User created",
                data: user
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const getAllUser = async (req, res) => {

    User.findAll({})
        .then(users => {
            res.status(200).json({
                message: "User created",
                data: users,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const updateUser = async (req, res) => {
    const body = req.body
    const id = req.params.id

    console.log(body)
    console.log(id)

    User.update({
        username: body.username,
        email: body.email,
        password: body.password
    }, {
        where : {
            id : id
        }
    })
        .then(() => {
            res.status(200).json({
                message: "Data Updated",
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const deleteUser = async (req, res) => {
    const id = req.params.id

    User.destroy({
        where : {
            id : id
        }
    })
        .then(() => {
            res.status(200).json({
                message: "Data Deleted",
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};


module.exports = {
    createUser,
    getAllUser,
    updateUser,
    deleteUser
}