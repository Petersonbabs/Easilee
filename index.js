const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.PORT
const mongoConnectUri = process.env.MONGO_CONNECT_URI
const app = express()
const userRoute = require("./router/user");

app.use(express.json());
app.use(cors());
app.use("/user", userRoute)

app.get("/", (req, res)=>{
    res.send("Welcome to Easaly")
})


// CONNECT WITH DATABASE
const connect =  ()=>{
    console.log("connecti...");
    mongoose.connect(mongoConnectUri)
    .then(()=>{console.log("You're connected");})
}


// LISTENING TO PORT
const listen = ()=>{
    app.listen(port, ()=>{
        console.log("listening to port " + port);
    })
}

// START DATABASE
const startDatabase = ()=>{
    connect()
    listen()
} 

startDatabase()