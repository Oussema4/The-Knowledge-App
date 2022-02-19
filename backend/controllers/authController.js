
const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.signup=async(req,res)=>{
    const {name,email,password}=req.body
    
        try {
    // user exist ?
    const foundemail=await User.findOne({email})
    const foundusername=await User.findOne({name})
    if (foundemail) {
        return res.status(400).send({errors:[{msg:"email is already exists"}]})
        }
        if(foundusername){
            return res.status(400).send({errors:[{msg:"User Name is already exists"}]})
        }
    
    
    
           const user= new User({
    name,email,password
    
           })
    
           //hash password
    const salt=10
    user.password=await bcrypt.hash(password,salt)
    
    
           await user.save()
    
    const payload = {
        id:user._id
    }
    const token=jwt.sign(payload,process.env.mykey, { expiresIn: '7d' })
    
           res.send({user,token})
            
        } catch (error) {
            
            res.status(500).send("server error")
            
        }
    
    }


    exports.signin=async(req,res)=>{
        const {email,password}=req.body
        try {
            // email exist ?
            const user=await User.findOne({email})
            if (!user) {
                return res.status(400).send({errors:[{msg:"your email or password is incorrect"}]})
                }
    
                // password exist ?
    
                const isMatch=await bcrypt.compare(password,user.password)
                if(!isMatch){
                    return res.status(400).send({errors:[{msg:"your email or password is incorrect"}]})
    
                }
    
                else{
                    const payload = {
                        id:user._id
                    }
                    const token=jwt.sign(payload,process.env.mykey, { expiresIn: '7d' })
                    res.send({user,token})
                }
    
        } catch (error) {
            console.log(error)
            res.status(500).send("server error")
        }
    }


    exports.getcurrent=async(req,res)=>{

        try {
            const user=await User.findById(req.user.id)
        res.send(user)
        } catch (error) {
            console.log(error)
            res.status(500).send("server error")
        }
        }