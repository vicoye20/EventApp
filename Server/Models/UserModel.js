const mongoose = require ("mongoose");

const userSchema = mongoose.Schema ({
    name : {
        type: String,
        required: [true,"Please enter your name"]
    },
    email : {
        type: String,
        required: [true,"Please enter your email address"],
        unique: true
    },
    password : {
        type: String,
        required: [true,"Please enter your password"]
    },
    phoneNumber : {
        type: Number,
        required: [true,"Please enter your phone number"]
    },
    dateOfBirth : {
        type: String,
        required: true
    },
    nationality : {
        type: String,
        required: [true,"Please enter your nationality"]
    },
    userName : {
        type: String,
        required: [true,"Please enter your username"]
    },
    profilePhoto : {
        type: String,
        required: [true,"Please enter your profile photo"]
    },
    },
    { timestamps : true})

    const userModel = mongoose.model ("userModel",userSchema)
    module.exports = userModel;