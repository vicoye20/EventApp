const mongoose = require('mongoose');

const mcsSchema = mongoose.Schema ({
    name : {
        type : String,
        required : [true,"Please enter your name"]
    },
    picture : {
        type : String,
        required : [true,"Please enter your picture"]
    },
    description : {
        type : String,
        required : [true,"Please enter your description"]
    },
    amount : {
        type : String,
        required : [true,"Please enter your amount"]
    }
}, {timeStamp : true})

const McsModel = mongoose.model ("McsModel",mcsSchema)
module.exports = McsModel;