const express=require("express")
const isAuth = require("../middleware/isAuth")
const upload = require("../middleware/upload")
const User = require("../models/User")
const router=express.Router()


router.put("/",isAuth,upload.single("Pimage"),async(req,res)=>{

    if(!req.file){
        return res.status(400).send("Error no file")
    }
    try {
        await User.findByIdAndUpdate(req.user.id,{$set:{imageUrl:req.file.filename}})

        res.send('image uploaded')
    } catch (error) {
        res.status(500).send("Server error")
    }

  


})



module.exports=router