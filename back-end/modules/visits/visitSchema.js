const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const visitSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        // required: true,
        min: 3
    },
    specialty: {
        type: String,
        // required: true
    },
    date: {
        type: String,
    },
    doctorId: {
        type: String,
        // required: true
    },
    userId: {
        type: String,
        // required: true
    },
});

module.exports = visitSchema;