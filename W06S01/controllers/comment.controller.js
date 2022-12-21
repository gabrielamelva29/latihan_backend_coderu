const { Comment } = require('../models')

const createComment = async (req, res) => {
    const body = req.body
    
    Comment.create({
        comment: body.comment,
        photo_id: body.photo_id,
        user_id: req.id,
    }).then(comment => {
            res.status(200).json({
                message: "Comment created",
                data: comment,
            });
        }).catch(e => {
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

module.exports = {
    createComment
}
