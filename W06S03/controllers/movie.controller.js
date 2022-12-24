const Movie = require('../models/movie.model')

const create = async (req, res) => {
    try {
        const movieData = await Movie.create(req.body)
        return res.status(200).json(movieData)
    } catch (err) {
        res.status(500).json({
            message: "INTERNAL_SERVER_ERROR"
        })
    } 
}

const get = async (req, res) => {
    try {
        const data  = await Movie.find()
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
    
        const data  = await Movie.findByIdAndUpdate(id, req.body)
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
    
        await Movie.findByIdAndDelete(id)
        res.status(200).json({
            message: "Delete Success"
        })
    } catch (err) {
        res.status(500).json({
            message: "INTERNAL_SERVER_ERROR"
        })
    } 
}

const review = async (req, res) => {
    try {
        Movie.findOneAndUpdate(
            { _id: req.params.id }, 
            { $push: { reviews: req.body} },
            function (error, success) {
                 if (error) {
                    return res.status(500).json({
                        message: "INTERNAL_SERVER_ERROR"
                    })
                 } else {
                    res.status(200).json({
                        message: "Success"
                    })
                 }
        });         
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
    deleteData,
    review
}