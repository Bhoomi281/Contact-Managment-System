const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(cors())
const dotenv=require("dotenv");//call the library
dotenv.config();

 app.get("/", (req,res)=> {
 res.send("homepage test");
 })
//const url = `mongodb+srv://dhiraj:dhiraj123@cluster0.xhkozew.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://naziyapatel:naziya7299@cluster0.b65ehox.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Error connecting to database:', err));
app.listen(process.env.PORT ||3001, () => {
    console.log("Backend server is running on 3001!");
  })