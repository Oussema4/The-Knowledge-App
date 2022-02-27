import axios from "axios"
import {   GETONENUMBER, GETONEQUESTION, GETONEQUIZ, GETQUESTIONS, TOGGLEFALSE, TOGGLETRUE } from "../types/gameType"

//getAll questions

export const getquestions=()=>async(dispatch)=>{
    const res=await axios.get("/game/getAllQuestions")
    try {
        
    
        dispatch({type:GETQUESTIONS,payload:res.data})
            
        
    } catch (error) {
        console.log(error)

    }
    
    
    }



       



            export const getOneQuiz=(navigate)=>async(dispatch)=>{
                const res=await axios.get("/game/getOneQuiz")
                try {
                    
                
                    dispatch({type:GETONEQUIZ,payload:res.data})
                        
                    
                } catch (error) {
                    console.log(error)
            
                }
                
                
                }

              

                
            export const getOneNumber=(navigate)=>async(dispatch)=>{
                const res=await axios.get("/game/getOneNumber")
                try {
                    
                
                    dispatch({type:GETONENUMBER,payload:res.data})
                        
                    
                } catch (error) {
                    console.log(error)
            
                }
                
                
                }


                export const getOneQuestion=(id)=>async(dispatch)=>{
                    try {
                       const res= await axios.get(`/game/${id}`)
                       dispatch({type:GETONEQUESTION,payload:res.data})
                    } catch (error) {
                        console.log(error)

                    }


                }
                





        





export const addquestion=(data)=>async(dispatch)=>{

    try {
        await axios.post("/game/addQuestion",data)
    
        dispatch(getquestions())
            
      
    } catch (error) {
        console.log(error)
        
    }
    
    
    }

    export const editQuestion=(id,data)=>async(dispatch)=>{
        try {
            
            await axios.put(`/game/${id}`,data)
    
            dispatch(getquestions())
    
        } catch (error) {
            console.log(error)
    
        }
    }


    export const toggleTrue=()=>{

        return{
            type:TOGGLETRUE
        }
    }
    
    export const toggleFalse=()=>{
    
        return{
            type:TOGGLEFALSE
        }
    }
     

    export const deleteQuestion=(id)=>async(dispatch)=>{

        try {
            await axios.delete(`game/${id}`)
            dispatch(getquestions())
    
            
        } catch (error) {
            console.log(error)
    
        }
    }