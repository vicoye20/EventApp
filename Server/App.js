const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config()
const EventModel = require("./Models/EventModel")
const Event2Model = require("./Models/Event2Model")
const Event3Model = require("./Models/Event3Model")
const ComedianModel = require("./Models/ComedianModel")
const MusicModel = require("./Models/MusicModel")
const UserModel = require("./Models/UserModel")
const McsModel = require("./Models/McsModel")
const DiscModel = require("./Models/DiscModel")
const DancerModel = require("./Models/DancerModel")
const SoundModel = require("./Models/SoundModel")
const SecurityModel = require("./Models/SecurityModel")
const CateringModel = require("./Models/CateringModel")
const PhotoModel = require("./Models/PhotoModel")
const VideoModel = require("./Models/VideoModel")
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

App.get(`/eventsTwo/:id`,async(req,res) => {
    const {id} = req.params
    try {
        const eventsTwo = await Event2Model.findById(id)
        res.status(200).json(eventsTwo)
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

// get data from music

App.get("/musics",async(req,res)=>{
    console.log("posted")
    try {
        const music = await MusicModel.find(req.body)
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

// to get data from djs

App.get("/discs",async(req,res)=>{
    console.log("posted")
    try {
        const discs = await DiscModel.find(req.body)
        res.status(200).json(discs)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// post dancers task

App.post("/dancer", async (req,res) => {
    console.log("posted")
    try {
        const dancer = await DancerModel.create(req.body)
        res.status(200).json(dancer)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get data from dancers

App.get("/dancers",async (req,res) => {
    console.log("posted")
    try{
        const dancers = await DancerModel.find(req.body)
        res.status(200).json(dancers)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// post comedian tasks

App.post("/comedy", async (req,res) => {
    console.log("posted")
    try {
        const comedy = await ComedianModel.create(req.body)
        res.status(200).json(comedy)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get data from comedian

App.get("/comedians",async(req,res)=>{
    console.log("posted")
    try {
        const comedians = await ComedianModel.find(req.body)
        res.status(200).json(comedians)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})


// sound post task

App.post("/sound", async (req,res) => {
    console.log("posted")
    try {
        const sound = await SoundModel.create(req.body)
        res.status(200).json(sound)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get data from sound

App.get("/sounds",async(req,res)=>{
    console.log("posted")
    try {
        const sounds = await SoundModel.find(req.body)
        res.status(200).json(sounds)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// post mcs task

App.post("/mc", async (req,res) => {
    console.log("posted")
    try {
        const mc = await McsModel.create(req.body)
        res.status(200).json(mc)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get data from mcs

App.get("/mcs",async(req,res)=>{
    console.log("posted")
    try {
        const mcs = await McsModel.find(req.body)
        res.status(200).json(mcs)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// post security task

App.post("/security", async (req,res) => {
    console.log("posted")
    try {
        const security = await SecurityModel.create(req.body)
        res.status(200).json(security)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get data from security

App.get("/securities",async(req,res)=>{
    console.log("posted")
    try {
        const securities = await SecurityModel.find(req.body)
        res.status(200).json(securities)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// post catering task   

App.post("/catering", async (req,res) => {
    console.log("posted")
    try {
        const catering = await CateringModel.create(req.body)
        res.status(200).json(catering)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get data from catering

App.get("/caterings",async(req,res)=>{
    console.log("posted")
    try {
        const caterings = await CateringModel.find(req.body)
        res.status(200).json(caterings)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// post photographer task

App.post("/photographer", async (req,res) => {
    console.log("posted")
    try {
        const photographer = await PhotoModel.create(req.body)
        res.status(200).json(photographer)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get data from photographer

App.get("/photographers",async(req,res)=>{
    console.log("posted")
    try {
        const photographers = await PhotoModel.find(req.body)
        res.status(200).json(photographers)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})  

// post videographer task

App.post("/videographer", async (req,res) => {
    console.log("posted")
    try {
        const videographer = await VideoModel.create(req.body)
        res.status(200).json(videographer)
    }
     catch (error) {
        res.status(500).json({error:error.message})
    }
})

// get data from videographer

App.get("/videographers",async(req,res)=>{
    console.log("posted")
    try {
        const videographers = await VideoModel.find(req.body)
        res.status(200).json(videographers)
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
        