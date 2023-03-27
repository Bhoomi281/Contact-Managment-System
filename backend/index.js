const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// import { userRouter } from "./routes/usersRoute";
const user = require("./routes/usersRoute.jsx")
 const contacts = require("./routes/contacts.js")
const port = 3001;
const app = express();
app.use(express.json())
app.use(cors());

<<<<<<< HEAD
const url = "mongodb+srv://dhiraj:dhiraj123@cluster0.xhkozew.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url).then(()=>{
=======

const url = "mongodb+srv://Bhoomi:Bhoomi12@cluster0.t36ylx8.mongodb.net/?retryWrites=true&w=majority";
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,
};
mongoose.connect(url , connectionParams).then(()=>{
>>>>>>> 00cdc18f938913d763208e18908929f912958e45
    console.log("Connection with mongoos successful")
}).catch((err)=>{
    console.log(`Connection with mongoose failed ${err}`)
})

app.use("/auth", user)
app.use("/api" , contacts)

app.listen(port,()=>{console.log(`BE is running on port ${port}`)})