const bcrypt = require('bcrypt');
const util = require('util');
const jwt = require('jsonwebtoken');
const Doctor = require('./doctorModel');

const asyncSign = util.promisify(jwt.sign);

const secretKey = "kokololososomomofofo";

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const doctor = await Doctor.findOne({ email });
        if (!doctor) throw new Error('invalid email or password');

        const { password: hashedPassword } = doctor;
        const result = await bcrypt.compare(password, hashedPassword);
        if (!result) throw new Error('invalid email or password');

        const token = await asyncSign({
            id: doctor._id.toString()
        }, process.env.SECRET_KEY);

        res.send({ token });
    } catch (error) {
        next(error);
    }
}

const addDoctor = async (req, res, next) => {
    const { doctorname, email, password, gender, birthDate, mobile, admin } = req.body;
    try {
        const doctor = new Doctor({ doctorname, email, password, gender, birthDate, mobile, admin });
        const createdDoctor = await doctor.save();
        res.send(createdDoctor);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const getAllDoctors = async (req, res, next) => {
    try {
        const doctors = await Doctor.find();
        res.send(doctors);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const getDoctor = async (req, res, next) => {
    const { id } = req.params;
    try {
        const doctor = await Doctor.findById(id);
        res.send(doctor);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const deleteDoctor = async (req, res, next) => {
    const { id } = req.params;
    try {
        const doctor = await Doctor.findByIdAndDelete(id);
        res.send("doctor deleted");
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const editDoctor = async (req, res, next) => {
    const { doctorname, email, password, gender, birthDate, mobile, admin } = req.body;
    const { id } = req.params;
    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, {
            doctorname, email, password, gender, birthDate, mobile, admin
        }, { new: true })
        res.send(updatedDoctor);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

module.exports = {
    login,
    addDoctor,
    getAllDoctors,
    editDoctor,
    getDoctor,
    deleteDoctor
}