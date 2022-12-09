const fs = require('fs')
const db = require("../config/db");

const getRegenciesToDo = async (req, res) => {
    await db
    .query("select * from regency order by id")
    .then((result) => {
        res.status(200).json({
        data: result.rows,
        });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
        message: "INTERNAL SERVER ERROR",
        });
    });
}

const getRegenciesToDoByID = async (req, res) => {
    // const body = req.body;
    const id = req.params.id;

    await db
    .query(`select * from regency where id =  ${id}`)
    .then((result) => {
        res.status(200).json({
        data: result.rows,
        });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
        message: "INTERNAL SERVER ERROR",
        });
    });
}

const postRegenciesToDo = async (req, res) => {
    const body = req.body;

    await db
    .query(`insert into regency(id, province_id, name, alt_name, latitude, longitude) values ('${body.id}','${body.province_id}','${body.name}', '${body.alt_name}','${body.latitude}',${body.longitude})`)
    .then((result) => {
        res.status(200).json({
        message: 'Todo successfully created',
        });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
        message: "INTERNAL SERVER ERROR",
        });
    });
};

const updateRegenciesToDo = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    await db
    .query(`update regency set province_id = '${body.province_id}', name = '${body.name}', alt_name = '${body.alt_name}', latitude = '${body.latitude}', longitude = ${body.longitude}
    where id =  ${id}`)
    .then((result) => {
        res.status(200).json({
        message: 'data updated',
        });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
        message: "INTERNAL SERVER ERROR",
        });
    });
};

const deleteRegenciesToDo = async (req, res) => {
    const id = req.params.id;

    await db
    .query(`delete from regency where id =  ${id}`)
    .then((result) => {
        res.status(200).json({
        message: 'data deleted',
        });
    })
    .catch((e) => {
        console.log(e);
        res.status(500).json({
        message: "INTERNAL SERVER ERROR",
        });
    });
};

module.exports = {
    getRegenciesToDo,
    getRegenciesToDoByID,
    postRegenciesToDo,
    updateRegenciesToDo,
    deleteRegenciesToDo
}