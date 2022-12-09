const fs = require('fs')
const db = require("../config/db");

const getProvincesToDo = async (req, res) => {
    await db
    .query("select * from province order by id")
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

const getProvincesToDoByID = async (req, res) => {
    // const body = req.body;
    const id = req.params.id;

    await db
    .query(`select * from province where id =  ${id}`)
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

const getProvincesToDoByRegencyName = async (req, res) => {
    // const body = req.body;
    const name = req.params.name;

    await db
    .query(`select * from province p join regency r ON p.id =r.province_id where r.name=${name}`)
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

const postProvincesToDo = async (req, res) => {
    const body = req.body;

    await db
    .query(`insert into province(id,name, alt_name, latitude, longitude) values ('${body.id}','${body.name}', '${body.alt_name}','${body.latitude}',${body.longitude})`)
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

const updateProvincesToDo = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    await db
    .query(`update province set name = '${body.name}', alt_name = '${body.alt_name}', latitude = '${body.latitude}', longitude = ${body.longitude}
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

const deleteProvincesToDo = async (req, res) => {
    const id = req.params.id;

    await db
    .query(`delete from province where id =  ${id}`)
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
    getProvincesToDo,
    getProvincesToDoByID,
    postProvincesToDo,
    updateProvincesToDo,
    deleteProvincesToDo,
    getProvincesToDoByRegencyName
}