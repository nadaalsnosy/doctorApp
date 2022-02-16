const express = require('express');
const User = require('./userModel');
const userRouter = express.Router();

const { login, addUser, getAllUsers, editUser, getUser, deleteUser } = require('./userController');

const { validateData, verifyToken, preHash } = require('./middlewares');

userRouter.get('/', getAllUsers);
userRouter.post('/', preHash, addUser);
userRouter.patch('/:id', validateData, preHash, editUser);
userRouter.get('/:id', getUser);
userRouter.delete('/:id', deleteUser);

userRouter.post('/login', validateData, login);

userRouter.get('/profile', verifyToken, async (req, res, next) => {
    const users = await User.find();
    res.send(users);
});

module.exports = userRouter;