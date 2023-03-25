const router = require("express").Router()
// router.use(bodyParser.json());
const {Contacts} = require("../models/contacts.js");
// const { validateToken } = require("../routes/usersRoute");

//posting 

router.post('/api/v1/contacts',validateToken,async(req,res)=>{
    try{
        const arr = req.body;
        console.log("hitting-post");
        console.log(req.user)

         for(let i=0; i<arr.length; i++){
            
            await Contacts.create({
                name:arr[i].name,
                designation: arr[i].designation,
                company:arr[i].company,
                industry: arr[i].industry,
                email: arr[i].email,
                phoneNumber:arr[i].phoneNumber,
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

router.get("/api/v1/contacts",validateToken,async(req,res)=>{
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

router.get("/api/v1/contacts/:email",validateToken,async(req,res)=>{
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

