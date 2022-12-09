const fs = require('fs')
const db = require("../config/db");
const { Regency } = require('../models')

const createRegency = async (req, res) => {
    const body = req.body;

    Regency.create({
        id: body.id,
        province_id: body.province_id,
        name: body.name,
        alt_name: body.alt_name,
        latitude: body.latitude,
        longitude: body.longitude
    })
        .then(regency => {
            res.status(200).json({
                message: "Regency created",
                data: regency,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const getAllRegency = async (req, res) => {

    Regency.findAll({})
        .then(regencies => {
            res.status(200).json({
                message: "Regencys List",
                data: regencies,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const getRegencyByID = async (req, res) => {
    const id = req.params.id

    Regency.findOne({where:{id:id}})
        .then(regencies => {
            res.status(200).json({
                message: "Regencys List",
                data: regencies,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const updateRegency = async (req, res) => {
    const body = req.body
    const id = req.params.id

    console.log(body)
    console.log(id)

    Regency.update({
        province_id:body.province_id,
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

const deleteRegency = async (req, res) => {
    const id = req.params.id

    Regency.destroy({
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
    createRegency,
    getAllRegency,
    getRegencyByID,
    updateRegency,
    deleteRegency
}