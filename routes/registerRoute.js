const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = express.Router()
const userModel = require("../models/useModel")
router.post("/signup", async (req,res)=>{
    try {
    const {email,password} = req.body
    console.log(email,password);
    const newpass = await bcrypt.hash(password,5)
            const user = await userModel.create({email: email, password: newpass})




            res.send(user)
        } catch (error) {
            res.status(400).send("server error")
        }    




})
router.get("/signup", (req,res)=>{
    res.send("signup route")
})

router.post("/login", async (req,res)=>{
console.log(req.body);
const {email,password} = req.body
// const users = await userModel.find({email})
//         console.log(users);
    try {
        const user =await userModel.findOne({email})
        // console.log(user);
        let verify = await bcrypt.compare(password,user.password)
        console.log(verify);
        if(verify){
            const token = await jwt.sign({userId: user._id},"code")
            res.status(200).send({msg: "login successfulyy", token: token})
        }
        else{
            res.status(401).send("wrong credentials")
        }

        // res.send(user)
    } catch (error) {
        console.log(error);
        res.send("server error")
    }

})

module.exports = router