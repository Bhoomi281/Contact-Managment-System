const mongoose = require("mongoose")

const userScheama = new mongoose.Schema({
    email:{
        type:String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true,
    },
    confirm_password:{
        type : String,
        require: true
    }
})
const user = mongoose.model("users", userScheama)
<<<<<<< HEAD
=======

>>>>>>> fce9c14fd11233983c12beaf24a7c11c3becbb28
module.exports = {user}
