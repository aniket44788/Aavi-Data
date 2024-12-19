const mongoose = require("mongoose")
const schema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    last : { 
        type : String,
        required : true,
    },
    phone : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    age : {
        type : String,
        required : true,
    },
})

const model = mongoose.model("aavis", schema)
module.exports =model;  
