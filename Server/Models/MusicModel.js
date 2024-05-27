const mongoose = require('mongoose');

const musicSchema = mongoose.Schema ({
    djName : {
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

const MusicModel = mongoose.model ("MusicModel",musicSchema)
module.exports = MusicModel;