const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const port = 3001

const app = express()
app.use(express.json())
app.use(cors())

const url = `mongodb+srv://dhiraj:dhiraj123@cluster0.xhkozew.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url)