var jwt = require('jsonwebtoken')
let privateKey = 'helloworld'

const verify = async(req, res, next) => {
    const token = req.headers["auth"]
    jwt.verify(token, privateKey, (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(401).send({
                message: "UnAuthorized",
            })
        }
        req.id = decoded.id
        req.email = decoded.email
        next()
    })
}

const verifyUser = async(req, res, next) => {

}

const generateToken = (payload) => {
    return jwt.sign(payload, privateKey, {
        algorithm: 'HS256',
        expiresIn: "1h"
    })
}

module.exports = {
    verify,
    generateToken,
    verifyUser
}