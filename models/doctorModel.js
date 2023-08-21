const mongoose = require("mongoose")

const doctorSchema = mongoose.Schema({
    name: {type: String, require: true},
    image: {type: String, require: true},
    specialization : {type: String, require: true},
    experience : {type: Number, require: true},
    location : {type: String, require: true},
    date : {type: String, require: true},
    slots : {type: Number, require: true},
    fee : {type: Number, require: true},
})

const doctorModel = mongoose.model("doctor",doctorSchema)

module.exports = doctorModel