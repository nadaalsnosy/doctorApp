const bcrypt = require('bcrypt');
const util = require('util');
const jwt = require('jsonwebtoken');
const User = require('./userModel');

const asyncSign = util.promisify(jwt.sign);

const secretKey = "kokololososomomofofo";

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('invalid email or password');

        const { password: hashedPassword } = user;
        const result = await bcrypt.compare(password, hashedPassword);
        if (!result) throw new Error('invalid email or password');

        const token = await asyncSign({
            id: user._id.toString()
        }, process.env.SECRET_KEY);

        res.send({ token });
    } catch (error) {
        next(error);
    }
}

const addUser = async (req, res, next) => {
    const { username, email, password, gender, birthDate, mobile, admin } = req.body;
    try {
        const user = new User({ username, email, password, gender, birthDate, mobile, admin });
        const createdUser = await user.save();
        res.send(createdUser);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const getUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        res.send(user);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        res.send("user deleted");
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const editUser = async (req, res, next) => {
    const { username, email, password, gender, birthDate, mobile, admin } = req.body;
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            username, email, password, gender, birthDate, mobile, admin
        }, { new: true })
        res.send(updatedUser);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

module.exports = {
    login,
    addUser,
    getAllUsers,
    editUser,
    getUser,
    deleteUser
}