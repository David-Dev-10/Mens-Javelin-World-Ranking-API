const mongoose = require("mongoose");

const menjavelinSchema = new mongoose.Schema({
    rank: {
        type : Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true,
        trim: true
    },
    event: {
        type: String,
        default: "Javelin Throw"
    }
});

const Menjavelin = new mongoose.model("Menjavelin",menjavelinSchema);

module.exports = Menjavelin;