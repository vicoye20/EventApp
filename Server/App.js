const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config()
const EventModel = require("./Models/EventModel")
const Event2Model = require("./Models/Event2Model")
const Event3Model = require("./Models/Event3Model")
const ComedianModel = require("./Models/ComedianModel")
const MusicModel = require("./Models/MusicModel")
const UserModel = require("./Models/UserModel")
const VenueModel = require("./Models/VenueModel")
const DiscModel = require("./Models/DiscModel")
const DancerModel = require("./Models/DancerModel")
const cors = require("cors")

const App = express();

// middlewares

App.use(express.json())
App.use(express.urlencoded())
App.use(cors())

App.get("/",(req,res) => {
    res.send("<h5>Welcome to larva academy Mr.Ibrahim</h5>")
})

// sending data to our database/mongoDB

// post task
App.post("/event",async(req,res)=>{
    console.log("posted")
    try {
        const event = await EventModel.create(req.body)
        res.status(200).json(event)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get events

App.get(`/event/:id`,async(req,res) => {
    const {id} = req.params
    try {
        const event = await EventModel.findById(id)
        res.status(200).json(event)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get all events

App.get(`/events`,async(req,res) => {
    try {
        const event = await EventModel.find()
        res.status(200).json(event)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// post venue event

App.post("/eventTwo",async(req,res)=>{
    console.log("posted")
    try {
        const eventTwo = await Event2Model.create(req.body)
        res.status(200).json(eventTwo)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

App.get("/eventsTwo",async(req,res)=>{
    console.log("posted")
    try {
        const eventTwo = await Event2Model.find(req.body)
        res.status(200).json(eventTwo)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// event routes

App.post("/eventThree",async(req,res)=>{
    console.log("posted")
    try {
        const eventThree = await Event3Model.create(req.body)
        res.status(200).json(eventThree)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

App.get("/eventsThree",async(req,res)=>{
    console.log("posted")
    try {
        const eventThree = await Event3Model.find(req.body)
        res.status(200).json(eventThree)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// post music task
App.post("/music",async(req,res)=>{
    console.log("posted")
    try {
        const music = await MusicModel.create(req.body)
        res.status(200).json(music)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// post djs task

App.post("/disc",async(req,res)=>{
    console.log("posted")
    try {
        const disc = await DiscModel.create(req.body)
        res.status(200).json(disc)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// connect to mongoDB

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connected successfully")
        App.listen(3000, () => {console.log("app listening on port 3000")})
    }).catch((error) => {console.log(error
        )})
        