const jwt = require('jsonwebtoken');
const util = require('util');
const User = require('./userModel');
const bcrypt = require('bcrypt');

const asyncVerify = util.promisify(jwt.verify);

const Joi = require('joi');

const validateData = async (req, res, next) => {
    try {
        const schema = Joi.object({
            username: Joi.string().min(3),
            email: Joi.string().email(),
            password: Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')),
            gender: Joi.string().valid('female', 'male'),
            birthDate: Joi.string(),
            mobile: Joi.string().pattern(new RegExp('^01[0-2,5]{1}[0-9]{8}$')),
            admin: Joi.boolean().default(false)
        })
        // const data = req.body;
        const result = Joi.attempt(req.body, schema);

        console.log("validated correct");
        console.log(result);

        res.send("validated correct");
        next();

    } catch (error) {
        error.statusCode = 403;
        next(error);
    }
}

const preHash = async (req, res, next) => {
    try {
        const saltRounds = 10;
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, saltRounds);
        }
        next();
    } catch (error) {
        error.statusCode = 403;
        next(error);
    }
};

const verifyToken = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const payload = await asyncVerify(authorization, process.env.SECRET_KEY);
        const user = await User.findById(payload.id)
        req.user = user;
    } catch (error) {
        error.message = "unauthorized";
        error.statusCode = 403;
        next(error);
    }
    next();
}

module.exports = {
    validateData,
    verifyToken,
    preHash
}


// {
//     "email": "hala1234@yoyo.com",
//     "password": "12345@As"
//     }


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGQ4YjY4ZTU5MTU4YWRkYTRmMzQ3NiIsImlhdCI6MTY0NTA1NDk4M30.kJ8LW0W_ewoz2HYY2DvZurxViaRzVrhVviRMNW4Xhvk