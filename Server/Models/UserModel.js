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
    dateOfBirth : {
        type: String,
        required: true
    },
    userName : {
        type: String,
        required: [true,"Please enter your username"]
    },
    },
    { timestamps : true})

    const userModel = mongoose.model ("userModel",userSchema)
    module.exports = userModel;