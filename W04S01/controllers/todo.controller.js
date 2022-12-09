const fs = require('fs')
const db = require("../config/db");

const getToDo = async (req, res) => {
    await db
    .query("select * from todo order by id")
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

const postToDo = async (req, res) => {
    const body = req.body;

    await db
    .query(`insert into todo(name, is_done) values ('${body.name}', ${body.is_done})`)
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

const updateToDo = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    await db
    .query(`update todo set name = '${body.name}', is_done = ${body.is_done}
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

const deleteToDo = async (req, res) => {
    const id = req.params.id;

    await db
    .query(`delete from todo where id =  ${id}`)
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
    getToDo,
    postToDo,
    updateToDo,
    deleteToDo
}