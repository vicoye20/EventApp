const mongoose = require('mongoose');

const discSchema = mongoose.Schema ({
    name : {
        type : String,
        required : [true,"Comedian name is required"]
    },
    picture : {
        type : String,
        required : [true,"Comedian image is required"]
    },
    description : {
        type : String,
        required : [true,"Comedian description is required"]
    },
    amount : {
        type : String,
        required : [true,"Please enter your amount"]
    }
}, {timeStamp : true})

const DiscModel = mongoose.model ("DiscModel",discSchema)
module.exports = DiscModel;