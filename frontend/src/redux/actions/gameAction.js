import axios from "axios"
import { GETNUMBERQUESTIONS, GETQUESTIONS, GETQUIZQUESTIONS } from "../types/gameType"

//getAll questions

export const getquestions=()=>async(dispatch)=>{
    const res=await axios.get("/game/getAllQuestions")
    try {
        
    
        dispatch({type:GETQUESTIONS,payload:res.data})
            
        
    } catch (error) {
        console.log(error)

    }
    
    
    }

    //get question by type

    export const getQuizQuestions=(navigate)=>async(dispatch)=>{
        const res=await axios.get("/game/getQuiz")
        try {
            
            
            dispatch({type:GETQUIZQUESTIONS,payload:res.data})
            navigate("/quiz")
            
        } catch (error) {
            console.log(error)
    
        }
        
        
        }


        export const getNumberQuestions=(navigate)=>async(dispatch)=>{
            const res=await axios.get("/game/getNumber")
            try {
                
            
                dispatch({type:GETNUMBERQUESTIONS,payload:res.data})
                    navigate("/number")
                
            } catch (error) {
                console.log(error)
        
            }
            
            
            }


        




export const addquestion=(data)=>async(dispatch)=>{

try {
    await axios.post("/game/addQuestion",data)

    
        
    
} catch (error) {
    console.log(error)
    
}


}