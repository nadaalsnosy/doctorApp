const express = require('express');
const User = require('./userModel');
const userRouter = express.Router();

const { login, addUser, getAllUsers, editUser, getUser, deleteUser } = require('./userController');

const { validateData, verifyToken, preHash } = require('./middlewares');

userRouter.get('/', getAllUsers);
userRouter.post('/', preHash, addUser);

userRouter.post('/login', login);

userRouter.get('/profile', verifyToken, async (req, res, next) => {
    res.send(req.user);
});

userRouter.patch('/:id', validateData, preHash, editUser);
userRouter.get('/:id', getUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;