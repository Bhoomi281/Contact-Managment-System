const router = require("express").Router()
//posting 
const Contacts = require("../models/contacts.js");
//posting 
const multer = require("multer");
const csv = require("csvtojson");
const fs=require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');

    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
const upload = multer({ storage: storage });

// Post contacts End Point
router.post("/contacts", upload.single("file"),async  (req, res) => {
    console.log(req.file)
    
    if (!req.file) {
      return res.status(400).send("No file was uploaded.");
    }
    const file = req.file;
    const fileContents = fs.readFileSync(file.path, 'utf-8');
  
    await csv()
      .fromString(fileContents)
      .then(async (jsonObj) => {
        
        jsonObj.forEach(obj => {
          obj.user = req.user.data; // Get user id from frontend to add to each object
        });
        
        // Json insertion to database

        let files=await Contacts.insertMany(jsonObj);
        
        console.log(files);

        fs.unlink(file.path, (err) => {
          if (err) throw err;
          console.log(`${file.path} was deleted`);
        });
  
        res.send("File uploaded and parsed");
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Error parsing CSV file");
      });
  });


// Delete contact api 

router.delete('/delete',async (req,res)=>{
    try{
    let delIds=req.headers['ids'].split(',');
    console.log(delIds);
    let deleted= await Contacts.deleteMany({ _id: { $in: delIds } });
    console.log(deleted.deletedCount);
    res.status(200).send({status: "Success"})
    }catch(e){
        res.status(500).send({status: "Failed", error : e})
    }
})

router.post('/contacts',async(req,res)=>{
    try{
        const arr = req.body;
        console.log("hitting-post");
        console.log(req.user)

         for(let i=0; i<arr.length; i++){
            
            await Contacts.create({
                email: arr[i].email,
                name:arr[i].name,
                designation: arr[i].designation,
                company:arr[i].company,
                industry: arr[i].industry,
                phone:arr[i].phone,
                country:arr[i].country,
                userId:req.user
            });
         }

    res.status(200).json({
        status:"success",
        user:arr
    })
    }
    catch(e){
        res.json({
            err:e.message
        })
        
    }
});

router.get("/contacts",async(req,res)=>{
    try{
        
        const users = await Contacts.find({userId:req.user});
        console.log("1",users);
        res.status(200).json({
            status:"success",
            users
        })
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
});

router.get("/contacts/:email",async(req,res)=>{
    try{

        const user = await Contacts.findOne({email:req.params.email});
        if(user.email){
            res.status(200).json({
                status:"success",
                user
            })
        }
        else{
            res.status(404).json({
                status:"failed",
                message:"user does not exists"
            })
        }
    }
    catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
})
module.exports = router;
