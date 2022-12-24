const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    userID : {
        type : String,
        required: true,
    },
    rating : {
        type : Number,
        required: true,
    },
    comment : {
        type : String,
        required: true,
    },
})
const MovieSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true,
    },
    rating : {
        type: Number,
        required: true,
    },
    description : {
        type: String,
        required: true,
    },
    reviews : [ReviewSchema]
})

const MovieModel = mongoose.model("Movie", MovieSchema)

module.exports = MovieModel