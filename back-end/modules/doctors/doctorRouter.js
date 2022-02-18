const express = require('express');
const Doctor = require('./doctorModel');
const { login, addDoctor, getAllDoctors, editDoctor, getDoctor, deleteDoctor } = require('./doctorController');
const { validateData, verifyToken, preHash } = require('./middlewares');
const doctorRouter = express.Router();

doctorRouter.get('/', getAllDoctors);
doctorRouter.get('/home', getDoctor);
doctorRouter.post('/signUp', preHash, addDoctor);
doctorRouter.patch('/:id', validateData, preHash, editDoctor);
doctorRouter.delete('/:id', deleteDoctor);
doctorRouter.post('/login', login);
// doctorRouter.post('/appointments/:id', booking);


module.exports = doctorRouter;