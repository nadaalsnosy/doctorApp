const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const doctorSchema = new mongoose.Schema({
    doctorname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    age: Number,
});


module.exports = doctorSchema;