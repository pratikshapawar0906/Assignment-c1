const mongoose = require('mongoose');

const userLoginSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },   
    password:{
        type:String,
        required:true,
    },

})


const userModel=new mongoose.model("user",buseLoginSchema)
module.exports=userModel;