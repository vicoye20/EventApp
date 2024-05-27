const mongoose = require('mongoose')

const venueSchema = mongoose.Schema ({
    venueName : {
        type : String,
        required : [true,"Venue name is required"]
    },
    location : {
        type : String,
        required : [true,"Location is required"]
    },
    image : {
        type : String,
        required : [true,"Image is required"]
    },
    descriptionOfAbout : {
        type : String,
        required : [true,"Description of about is required"]
    },
    descriptionOfSchedule : {
        type : String,
        required : [true,"Description of schedule is required"]
    },
    amount : {
        type : String,
        required : [true,"Amount is required"]
    },
}, { timeStamps : true})

const VenueModel = mongoose.model ("VenueModel",venueSchema)
module.exports = VenueModel