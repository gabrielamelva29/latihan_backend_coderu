const { Photo } = require('../models')

const createPhoto = async (req, res) => {
    const body = req.body
    
    Photo.create({
        caption: body.caption,
        url: body.url,
        user_id: req.id,
    }).then(photo => {
            res.status(200).json({
                message: "Photo created",
                data: photo,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};


const updatePhoto = async (req, res) => {
    const body = req.body
    const id = req.params.id

    Photo.update({
        caption:body.caption,
        url: body.url
    }, {
        where : {
            id : id
        }
    })
        .then(() => {
            res.status(200).json({
                message: "Photo Updated",
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const getAllPhoto = async (req, res) => {

    Photo.findAll({})
        .then(photos => {
            res.status(200).json({
                message: "Photos List",
                data: photos,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const getPhotoByID = async (req, res) => {
    const id = req.params.id

    Photo.findOne({where:{id:id}})
        .then(photo => {
            res.status(200).json({
                message: "this photo",
                data: photo,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

const deletePhoto = async (req, res) => {
    const id = req.params.id

    Photo.destroy({
        where : {
            id : id
        }
    })
        .then(() => {
            res.status(200).json({
                message: "Photo Deleted",
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};


module.exports = {
    createPhoto, 
    updatePhoto,
    getAllPhoto,
    getPhotoByID,
    deletePhoto
}