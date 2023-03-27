const router = require("express").Router()

const {Contacts} = require("../models/contacts.js");
//posting 

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
