const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = express.Router()
const doctorModel = require("../models/doctorModel")
router.post("/appointments", async (req,res)=>{
    try {
    // const {name,image,specialization} = req.body
 
            const newDoc = await doctorModel.create(req.body)

            res.status(200).send(newDoc)
        } catch (error) {
            res.status(400).send("server error")
        }    




})
router.get("/appointments", async (req,res)=>{
    try {
        const appointments = await doctorModel.find({})

        res.status(200).send(appointments)
    } catch (error) {
        console.log(error);
        res.send("server error")
    }
})

router.delete("/appointments/:id", async (req,res)=>{
    try {
        const id = req.params.id
        const appointment = await doctorModel.findByIdAndDelete(id)

        res.status(200).send(appointment)
    } catch (error) {
        console.log(error);
        res.send("server error")
    }
})
router.patch("/appointments/:id", async (req,res)=>{
    try {
        const id = req.params.id

        const updated = await doctorModel.findByIdAndUpdate({_id: id}, req.body, {new: true})

        res.status(200).send(updated)
    } catch (error) {
        console.log(error);
        res.send("server error")
    }
})


module.exports = router