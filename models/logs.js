const mongoose = require("mongoose")

const Schema = mongoose.Schema

const logSchema = new Schema({
    title: {type: String},
    entry: {type: String},
    shipIsBroken: {type: Boolean, required: true},
}, {timestamps: true})

const Log = mongoose.model("log", logSchema)

module.exports = Log