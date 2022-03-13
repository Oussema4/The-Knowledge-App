const mongoose=require("mongoose")


const userschema=new mongoose.Schema({

name:{
    type:String,required:true,unique:true
},
email:{
    type:String,required:true,unique:true
},
password:{
    type:String,required:true
},
role:{
    type:Number,default:0
},
imageUrl:String,



    
})

module.exports=mongoose.model("user",userschema)