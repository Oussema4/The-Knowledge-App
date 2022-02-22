
const Game=require("../models/Game")








exports.addQuestion=async(req,res)=>{

    const {question,choice1,choice2,choice3,true_choice,question_type,game_type}=req.body

try {

    const game=new Game({
    
        question,
        choice1,
        choice2,
        choice3,
        true_choice,
        question_type,
        game_type
    
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



exports.updateQuestion=async(req,res)=>{

    const  {gameId} =req.params
        
        
        try {
            await Game.findByIdAndUpdate(gameId,{$set:{...req.body}})
            res.send("updated")
            //res.redirect("/api/games")
            
        } catch (error) {
        
            res.status(500).send("server error")
        
        }
        
}




//***to be continue*****/


exports.getSport=async(req,res)=>{
    const type= await Game.find({ question_type: "sport" })
    try {
        res.send(type)
        
    } catch (error) {
        res.status(500).send("server error")
    }
    
    }


    exports.getQuiz=async(req,res)=>{
       
        const question= await Game.find({ game_type: "quiz"  })
        try {
            res.send(question)
           
        } catch (error) {
            res.status(500).send("server error")
        }
        
        }


        exports.getNumber=async(req,res)=>{
            const question= await Game.find({ game_type: "number" })
            try {
                
                res.send(question)
                
            } catch (error) {
                res.status(500).send("server error")
            }
            
            }


            exports.getOneQuiz=async(req,res)=>{
   
                

            

              Game.countDocuments({ game_type: "quiz"  }, function (err, count) {
                return random= Math.floor(Math.random() * count)
               
                  
                })
                    try {   
                        const question= await Game.findOne({ game_type: "quiz"  }).skip(random)
                        res.send(question)
                       
                         
                           
                        } catch (error) {
                            res.status(500).send("server error")
                        }
                  }
                  
 

               
               

                  
            exports.getOneNumber=async(req,res)=>{
   
                

            

                  Game.countDocuments({ game_type: "number"  }, function (err, count) {
                   return random= Math.floor(Math.random() * count)
                  
                     
                   })
                       try {   
                           const question= await Game.findOne({ game_type: "number"  }).skip(random)
                           res.send(question)
                          
                            
                              
                           } catch (error) {
                               res.status(500).send("server error")
                           }
                     }
               
                
                


          

            

            
    

            
   
