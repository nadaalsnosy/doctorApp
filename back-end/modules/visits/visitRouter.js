const express = require('express');
const Visit = require('./visitModel');
const visitRouter = express.Router();

const { login, addVisit, getAllVisits, editVisit, getVisit, deleteVisit } = require('./visitController');

const { validateData, verifyToken, preHash } = require('./middlewares');

visitRouter.get('/', getAllVisits);
visitRouter.post('/', preHash, addVisit);

// visitRouter.post('/login', login);


visitRouter.get('/profile', verifyToken, async (req, res, next) => {
    res.send(req.visit);
});

visitRouter.patch('/:id', validateData, preHash, editVisit);
visitRouter.get('/:id', getVisit);
visitRouter.delete('/:id', deleteVisit);

module.exports = visitRouter;