const mongoose = require('mongoose');

const soundSchema = mongoose.Schema ({
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

const SoundModel = mongoose.model ("SoundModel",soundSchema)
module.exports = SoundModel;