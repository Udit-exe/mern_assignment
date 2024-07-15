const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const Dish = require("./models/dishModel");

mongoose.connect(process.env.URI).then(()=>{
    console.log("Conneceted Succesfully");
    app.listen(process.env.PORT || 8000 , (err)=>{
        if(err) console.log(err);

        console.log("Running Successfuly at :" , process.env.PORT);
    });
})
.catch((error)=>{
    console.log("error: ", error);
});

app.post("/", async(req , res) =>{
    const {dishName, dishId , imageUrl, isPublished} = req.body;

    const Dish = require("./models/dishModel");

    try{
        const addedDish =   await User.create({
            dishName : dishName,
            dishId : dishId,
            imageUrl : imageUrl,
            isPublished : isPublished,
        });

        res.status(201).json(addedDish);
    }  catch(error){
        console.log(error);
        res.send(400).json({ error : error.message});
    }
});


app.get("/", (req,res) => {
    res.send("api running");
});

