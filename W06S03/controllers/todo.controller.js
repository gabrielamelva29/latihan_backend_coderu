const Todo = require('../models/todo.model')

const create = async (req, res) => {
    try {
        const todoData = await Todo.create(req.body)
        return res.status(200).json(todoData)
    } catch (err) {
        res.status(500).json({
            message: "INTERNAL_SERVER_ERROR"
        })
    } 
}

const get = async (req, res) => {
    try {
        const data  = await Todo.find()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            message: "INTERNAL_SERVER_ERROR"
        })
    } 
}

const update = async (req, res) => {
    try {
        const id = req.params.id 
    
        const data  = await Todo.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            message: "Update Success"
        })
    } catch (err) {
        res.status(500).json({
            message: "INTERNAL_SERVER_ERROR"
        })
    } 
}

const deleteData = async (req, res) => {
    try {
        const id = req.params.id 
    
        await Todo.findByIdAndDelete(id)
        res.status(200).json({
            message: "Delete Success"
        })
    } catch (err) {
        res.status(500).json({
            message: "INTERNAL_SERVER_ERROR"
        })
    } 
}

module.exports = {
    create,
    get,
    update,
    deleteData
}