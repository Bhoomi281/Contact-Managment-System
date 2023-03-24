const express = require("express")
const {user} = require("../models/user.jsx");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const router = express.Router()

router.post("/signup", async (req, resp)=>{
    const {email, password, confirm_password} = req.body;

    const userEmail = await user.findOne({email})
    if(userEmail){
        return resp.json({message: "Email already exitss!"})
    }

    if(password !== confirm_password){
        return resp.json({message: "Password in not matched"})
    }

    const hashPassword = await bcrypt.hash(confirm_password, 10) // hash the password

    const newUser = new user({email, password: hashPassword});
    await newUser.save()

    resp.json({message:"user register successfully"})

})

module.exports = router
