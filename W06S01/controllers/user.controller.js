const { User } = require('../models')
const bcrypt = require('bcrypt');
const { generateToken } = require('../middlewares/auth')

const register = async (req, res) => {
    const body = req.body;

    bcrypt.hash(body.password, 10, function(err, hash) {
        User.create({
            full_name: body.full_name,
            username: body.username,
            email: body.email,
            password: hash
        }).then(user => {
                res.status(200).json({
                    message: "User created",
                    data: user,
                });
            }).catch(e => {
                res.status(500).json({
                    message: "Internal Server Error",
                });
            })
    });
};


const login = async (req, res) => {
    const body = req.body;

    User.findOne({where : {
        email: body.email
    }})
        .then(async user => {
            if (!user) {
                return res.status(400).json({
                    message: "User Not Found",
                });
            }

            const match = await bcrypt.compare(body.password, user.password);

            if(match) {
                let token = generateToken({
                    id: user.id,
                    username : user.username,
                    email: user.email,
                    full_name: user.full_name,
                })

                return res.status(200).json({
                    message: "Success",
                    data : {
                        id: user.id,
                        username: user.username,
                        email:user.email,
                        full_name: user.full_name,
                        token: token
                    }
                });
            }

            return res.status(400).json({
                message: "User and Password is Not Match",
            });
        }).catch(e => {
            console.log(e)
            res.status(500).json({
                message: "Internal Server Error",
            });
        })
};

module.exports = {
    register,
    login
}