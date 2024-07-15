const express = require("express");

const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://iamuditagrawal:iamuditagrawal@dishes.rlym2gb.mongodb.net/?retryWrites=true&w=majority&appName=Dishes").then(()=>{
    console.log("Conneceted Succesfully");
}).catch((error)=>{
    console.log("error: ", error);
})
app.get("/", (req,res) => {
    res.send("api running");
})

PORT = 4000;

app.listen(PORT);