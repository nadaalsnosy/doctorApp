const bcrypt = require('bcrypt');
const util = require('util');
const jwt = require('jsonwebtoken');
const Visit = require('./visitModel');

const asyncSign = util.promisify(jwt.sign);

const secretKey = "kokololososomomofofo";

const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const visit = await Visit.findOne({ email });
        if (!visit) throw new Error('invalid email or password');

        const { password: hashedPassword } = visit;
        const result = await bcrypt.compare(password, hashedPassword);
        if (!result) throw new Error('invalid email or password');

        const token = await asyncSign({
            id: visit._id.toString()
        }, process.env.SECRET_KEY);

        res.send({ token });
    } catch (error) {
        next(error);
    }
}

// const addVisit = async (req, res, next) => {
//     const { doctorName, specialty, date, doctorId, userId } = req.body;

//     // const { visitname, email, password, gender, birthDate, mobile, admin } = req.body;
//     try {
//         // const visit = new Visit({ visitname, email, password, gender, birthDate, mobile, admin });
//         const newVisit = new Visit({ doctorName, specialty, date, doctorId, userId });
//         // const createdVisit = await visit.save();
//         const createdVisit = await newVisit.save();
//         const visitData = await newVisit.save().then((listDoc) => {
//             res.send(listDoc);
//         })
//         // res.send(createdVisit);
//     } catch (error) {
//         error.statusCode = 500;
//         next(error);
//     }
// }

const addVisit = async (req, res, next) => {
    let { doctorName, specialty, date, doctorId, userId } = req.body;

    try {
        let newVisit = new Visit({ doctorName, specialty, date, doctorId, userId });

        console.log(newVisit);

        newVisit.save().then((listDoc) => {
            res.send(listDoc);
        })

    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}


const getAllVisits = async (req, res, next) => {
    try {

        const visits = await Visit.find();
        res.send(visits);

    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const getVisit = async (req, res, next) => {
    const { id } = req.params;
    try {
        const visit = await Visit.findById(id);
        res.send(visit);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const deleteVisit = async (req, res, next) => {
    const { id } = req.params;
    try {
        const visit = await Visit.findByIdAndDelete(id);
        res.send("visit deleted");
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

const editVisit = async (req, res, next) => {
    const { visitname, email, password, gender, birthDate, mobile, admin } = req.body;
    const { id } = req.params;
    try {
        const updatedVisit = await Visit.findByIdAndUpdate(id, {
            visitname, email, password, gender, birthDate, mobile, admin
        }, { new: true })
        res.send(updatedVisit);
    } catch (error) {
        error.statusCode = 500;
        next(error);
    }
}

module.exports = {
    login,
    addVisit,
    getAllVisits,
    editVisit,
    getVisit,
    deleteVisit
}