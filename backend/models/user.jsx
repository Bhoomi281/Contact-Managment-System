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

<<<<<<< HEAD
const user = mongoose.model("users", userScheama)
=======
 const user = mongoose.model("user", userScheama)
>>>>>>> 00cdc18f938913d763208e18908929f912958e45
module.exports = {user}
