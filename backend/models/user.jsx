const mongoose = require("mongoose")

const userScheama = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    confirm_Password:{
        type : String,
        required: true
    }
})

 const user = mongoose.model("user", userScheama)
module.exports = {user}
