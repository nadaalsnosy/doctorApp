const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const visitSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3
    },
    doctorId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    specialist: {
        type: String,
        required: true
    },

    visitDate: {
        type: String,
    }
});

module.exports = visitSchema;