const mongoose=require("mongoose")


const gameSchema=new mongoose.Schema({

question:{
    type:String,required:true,unique:true
},
choice1:{
    type:String,required:true
},
choice2:{
    type:String,required:true
},
choice3:{
    type:String,required:true
},
true_choice:{
    type:String,required:true
},
question_type:{
    type:String,required:true
},
game_type:{
    type:String,required:true
},
index:{
    type:Number,required:true}

    
})

module.exports=mongoose.model("game",gameSchema)