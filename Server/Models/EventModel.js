const mongoose = require('mongoose')

const eventSchema = mongoose.Schema ({
    location : {
        type : String,
        required : [true,"Please select a location"]
    },
    picture : {
        type : String,
        required : [true,"Please select a picture"]
    },
    eventName : {
        type : String,
        required : [true,"Please enter a event name"]
    },
    time :{
        type : String,
        required : [true,"Please enter a time"]
    },
    amount : {
        type : String,
        required : [true," amount is required"]
    },
    date : {
        type : String,
        required : [true,"Please enter a date"]
    },
    descriptionForRegular : {
        type : String,
    },
    descriptionForVip : {
        type : String,
    },
    descriptionForTableForFive : {
        type : String,
    }
}, {timestamp : true})

const EventModel = mongoose.model ("EventModel",eventSchema)
module.exports = EventModel