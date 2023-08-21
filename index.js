const express = require("express");
const mongoose = require("mongoose");
const register = require("./routes/registerRoute")
const appointmentRoute = require("./routes/doctorRoute")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.use(register)
app.use(appointmentRoute)
app.get("/",(req,res)=>{

    res.send("backend")
})


app.listen(8080,async ()=>{
try {
    await mongoose.connect("mongodb+srv://murad:murad@cluster0.8j6egxm.mongodb.net/?retryWrites=true&w=majority")
    console.log('connected');
} catch (error) {
    console.log(error);
}
})