const fs = require('fs')
const db = require("../config/db");
const { Product, User } = require('../models')

const createProduct = async (req, res) => {
    const body = req.body;

    Product.create({
        name: body.name,
        price: body.price,
        quantity: body.quantity,
        user_id: body.user_id
    })
        .then(product => {
            res.status(200).json({
                message: "Product created",
                data: product,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const getAllProduct = async (req, res) => {

    Product.findAll({
        include:[
        {
            model:User,
            as:"users"
        }
    ]})
        .then(products => {
            res.status(200).json({
                message: "Products List",
                data: products,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const getProductByID = async (req, res) => {
    const id = req.params.id

    Product.findOne({where:{id:id}})
        .then(product => {
            res.status(200).json({
                message: "Data Product",
                data: product,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const updateProduct = async (req, res) => {
    const body = req.body
    const id = req.params.id

    console.log(body)
    console.log(id)

    Product.update({
        name: body.name,
        price: body.price,
        quantity: body.quantity,
        user_id: body.user_id
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

const deleteProduct = async (req, res) => {
    const id = req.params.id

    Product.destroy({
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
    createProduct,
    getAllProduct,
    getProductByID,
    updateProduct,
    deleteProduct
}