const mongoose = require('mongoose');

const Schema  = new mongoose.Schema ({
    name : {
        type: String,
        required : [true, "Please provide name"]
    },
    email : {
        type : String,
        unique : true,
        required : [true , "Please provide Email "],
        lowercase : true
    },
    address : {
        type : String,
        default : null
    },

    joining_date : {
        type: Date      
    }, 
    __v: {
        type:Number,
        select:false
    }

})

const User=  mongoose.model('users',Schema);
module.exports = User;
