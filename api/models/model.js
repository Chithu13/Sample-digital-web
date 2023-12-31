const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique:true
    },
    phone:{
        required:true,
        type:Number
    }
    ,
    message:{
        required:true,
        type:String
    }
})

module.exports = mongoose.model('userData', dataSchema)