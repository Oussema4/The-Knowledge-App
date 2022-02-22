import axios from "axios"
import {  GETNUMBERQUESTIONS, GETONENUMBER, GETONEQUIZ, GETQUESTIONS, GETQUIZQUESTIONS } from "../types/gameType"

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



            export const getOneQuiz=(navigate)=>async(dispatch)=>{
                const res=await axios.get("/game/getOneQuiz")
                try {
                    
                
                    dispatch({type:GETONEQUIZ,payload:res.data})
                        navigate("/quiz")
                    
                } catch (error) {
                    console.log(error)
            
                }
                
                
                }

              

                
            export const getOneNumber=(navigate)=>async(dispatch)=>{
                const res=await axios.get("/game/getOneNumber")
                try {
                    
                
                    dispatch({type:GETONENUMBER,payload:res.data})
                        navigate("/number")
                    
                } catch (error) {
                    console.log(error)
            
                }
                
                
                }





        




export const addQuizQuestion=(data)=>async(dispatch)=>{

try {
    await axios.post("/game/addQuestion",data)

    dispatch(getQuizQuestions())
        
    
} catch (error) {
    console.log(error)
    
}


}

export const addNumberquestion=(data)=>async(dispatch)=>{

    try {
        await axios.post("/game/addQuestion",data)
    
        dispatch(getNumberQuestions())
            
        
    } catch (error) {
        console.log(error)
        
    }
    
    
    }