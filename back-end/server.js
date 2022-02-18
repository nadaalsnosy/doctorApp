const express = require('express')
const app = express()

const userRouter = require('./modules/users/userRouter');
const visitRouter = require('./modules/visits/visitRouter')
const doctorRouter = require('./modules/doctors/doctorRouter')

const mongoose = require('mongoose');
const cors = require('cors');
// const axios = require('./axiosData');
require('dotenv').config();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/users', userRouter);
app.use('/visits', visitRouter);
app.use('/doctors', doctorRouter);



mongoose.connect('mongodb://localhost:27017/doctorsApp', (err) => {
    if (err) process.exit(1);
    console.log("connected to database successfully");
});


app.listen(port, () => {
    console.log(`express app listening on port ${port}`)
})

app.use((err, req, res, next) => {
    res.send({
        status: err.statusCode,
        message: err.message,
        errors: err.errors || []
    });
})
