const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:4,
    },
    mobile:{
      type:Number,
      trim:true,
    },
   
    },{timestamps:true});


const User = mongoose.model('User',userSchema);
module.exports = { User}