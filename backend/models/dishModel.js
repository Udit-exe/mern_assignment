const mongoose = require("mongoose");

const dishSchmena = new mongoose.Schema({
    dishName : {
        type : String,
        required : true,
    },
    dishId : {
        type : Number,
        required : true,
        unique : true,
    },
    imageUrl : {
        type : String,
    },
    isPublished : {
        type : Boolean,
    }
});

const Dish = mongoose.model('Dish' , dishSchmena)

module.exports = Dish;