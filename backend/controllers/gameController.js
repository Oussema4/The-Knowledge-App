
const Game=require("../models/Game")








exports.addQuestion=async(req,res)=>{

    const {question,choice1,choice2,choice3,true_choice,question_type,game_type}=req.body
var index=0
try {
if(game_type==="quiz"){
    const quiz=await Game.find({game_type:"quiz"})
  index=quiz.length+1
}
if(game_type==="number"){
    const number=await Game.find({game_type:"number"})
    index=number.length+1
}

    const game=new Game({
    
        question,
        choice1,
        choice2,
        choice3,
        true_choice,
        question_type,
        game_type,
        index
    
    })

    await game.save()
    res.send( {msg:"game added",game})

    
} catch (error) {
    res.status(500).send("server error")
}

}




exports.deleteQuestion=async(req,res)=>{

    const  {gameId} =req.params
        try {
    await Game.findByIdAndDelete(gameId)
    res.send("Question deleted")
    
            
        } catch (error) {
            res.status(500).send("server error")
        }
}



exports.getAllQuestions=async(req,res)=>{
    try {
    
    const games= await Game.find()
    
    res.send(games)

    } catch (error) {
        res.status(500).send("server error")
    }
    
    }

    
exports.getOneQuestion=async(req,res)=>{
    try {
        const question= await Game.findById(req.params.id)
        res.send(question)
    } catch (error) {
        
    }
}


exports.updateQuestion=async(req,res)=>{

    const  {gameId} =req.params
        
        
        try {
            await Game.findByIdAndUpdate(gameId,{$set:{...req.body}})
            res.send("updated")
            
            
        } catch (error) {
        
            res.status(500).send("server error")
        
        }
        
}




//***to be continue*****/
   exports.getOneQuiz=async(req,res)=>{
       const {index}=req.params
              try {   
                    const question= await Game.findOne({ game_type: "quiz",index:index })
                    res.send(question)
                   
                     
                       
                    } catch (error) {
                        res.status(500).send("server error")
                    }
                  
                }
                
                  
                  
 

               
               

                  
            exports.getOneNumber=async(req,res)=>{
   
                const {index}=req.params

                try {   
                    const question= await Game.findOne({ game_type: "number",index:index })
                    res.send(question)
                   
                     
                       
                    } catch (error) {
                        res.status(500).send("server error")
                    }
              }
        
               

                     

          

            
                    // exports.getSport=async(req,res)=>{
                        //const type= await Game.find({ question_type: "sport" })
                       // try {
                           // res.send(type)
                            
                        //} catch (error) {
                           // res.status(500).send("server error")
                       // }
                        
                        //}
                    
                    
                        exports.getQuiz=async(req,res)=>{
                              
                            try {
                                const questions= await Game.find({ game_type: "quiz"  })
                                res.send(questions)
                               
                            } catch (error) {
                                res.status(500).send("server error")
                            }
                            
                            }



                            exports.getNumber=async(req,res)=>{
                              
                                try {
                                    const questions= await Game.find({ game_type: "number"  })
                                    res.send(questions)
                                   
                                } catch (error) {
                                    res.status(500).send("server error")
                                }
                                
                                }
                    
                    
                            //exports.getNumber=async(req,res)=>{
                               // const question= await Game.find({ game_type: "number" })
                               // try {
                                    
                                  //  res.send(question)
                                    
                               // } catch (error) {
                                 //   res.status(500).send("server error")
                               // }
                                
                               // }
                    
                    
            
    

            
   
