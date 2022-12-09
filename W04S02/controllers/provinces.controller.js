const fs = require('fs')
const db = require("../config/db");
const { Province } = require('../models')

const createProvince = async (req, res) => {
    const body = req.body;

    Province.create({
        id: body.id,
        name: body.name,
        alt_name: body.alt_name,
        latitude: body.latitude,
        longitude: body.longitude
    })
        .then(province => {
            res.status(200).json({
                message: "Province created",
                data: province,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const getAllProvince = async (req, res) => {

    Province.findAll({})
        .then(provinces => {
            res.status(200).json({
                message: "Provinces List",
                data: provinces,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const updateProvince = async (req, res) => {
    const body = req.body
    const id = req.params.id

    console.log(body)
    console.log(id)

    Province.update({
        name: body.name,
        alt_name: body.alt_name,
        latitude: body.latitude,
        longitude: body.longitude
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

const deleteProvince = async (req, res) => {
    const id = req.params.id

    Province.destroy({
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
    createProvince,
    getAllProvince,
    updateProvince,
    deleteProvince
}