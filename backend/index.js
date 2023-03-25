const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

// import { userRouter } from "./routes/usersRoute";
// const user = require("./routes/router")
const user = require("./routes/usersRoute.jsx")
const port = 3001;
const app = express();
app.use(express.json())
app.use(cors());


const url = `mongodb+srv://dhiraj:dhiraj123@cluster0.xhkozew.mongodb.net/contactmanger?retryWrites=true&w=majority`

mongoose.connect(url).then(()=>{
    console.log("Connection with mongoos successful")
}).catch((err)=>{
    console.log(`Connection with mongoose failed ${err}`)
})


app.use("/auth", user)

app.listen(port,()=>{console.log(`BE is running on port ${port}`)})