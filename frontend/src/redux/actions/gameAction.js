import axios from "axios"
import {   FIFTYFALSE, FIFTYTRUE, GETALLNUMBERS, GETALLQUIZ, GETONENUMBER, GETONEQUESTION, GETONEQUIZ, GETQUESTIONS, TOGGLEFALSE, TOGGLETRUE } from "../types/gameType"

//getAll questions

export const getquestions=()=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }         
    
    try {
        const res=await axios.get("/game/getAllQuestions",config)
        
    
        dispatch({type:GETQUESTIONS,payload:res.data})
            
        
    } catch (error) {
        console.log(error)

    }
    
    
    }



            // get all quiz  
                export const getAllQuiz=()=>async(dispatch)=>{
                    const config={
                        headers:{
                            authorization:localStorage.getItem('token')
                        }
                    }                 
                            try {
                                const res=await axios.get('/game/getQuiz',config)
                                dispatch({type:GETALLQUIZ,payload:res.data})            
                            } catch (error) {
                                console.log(error)
                        
                            } 
                            }

                  //GETNUMBERS      
                            export const getAllNumbers=()=>async(dispatch)=>{
                                const config={
                                    headers:{
                                        authorization:localStorage.getItem('token')
                                    }
                                }                 
                                        try {
                                            const res=await axios.get('/game/getNumber',config)
                                            dispatch({type:GETALLNUMBERS,payload:res.data})            
                                        } catch (error) {
                                            console.log(error)
                                    
                                        } 
                                        }                




       

// get one quiz
export const getOneQuiz=(index)=>async(dispatch)=>{
    const config={
        headers:{
            authorization:localStorage.getItem('token')
        }
    }
            
            try {
                const res=await axios.get(`/game/getOneQuiz/${index}`,config)
                dispatch({type:GETONEQUIZ,payload:res.data})            
            } catch (error) {
                console.log(error)
        
            } 
            }



                
            export const getOneNumber=(index)=>async(dispatch)=>{
                const config={
                    headers:{
                        authorization:localStorage.getItem('token')
                    }
                }

                try {
                    const res=await axios.get(`/game/getOneNumber/${index}`,config)

                
                    dispatch({type:GETONENUMBER,payload:res.data})
                        
                    
                } catch (error) {
                    console.log(error)
            
                }
                
                
                }


                export const getOneQuestion=(id)=>async(dispatch)=>{

                    const config={
                        headers:{
                            authorization:localStorage.getItem('token')
                        }
                    }
                    try {
                       const res= await axios.get(`/game/${id}`,config)
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




     


    export const fiftytrue=()=>{

        return{
            type:FIFTYTRUE
        }
    }
    
    export const fiftyfalse=()=>{
    
        return{
            type:FIFTYFALSE
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


