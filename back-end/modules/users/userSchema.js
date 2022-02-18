const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, "Please fill a valid password"]
    },
    gender: {
        type: String,
        required: true,
        enum: ['female', 'male']
    },
    birthDate: {
        type: String,
    },
    mobile: {
        type: String,
        required: true,
        match: [/^01[0-2,5]{1}[0-9]{8}$/, "Please fill a valid mobile number"]
    },
    admin: {
        type: Boolean,
        default: false
    }
});

module.exports = userSchema;