import { CLEARERRORS,  FAIL, GETCURRENT, GETUSERS, LOGOUT, SIGNIN, SIGNUP } from "../types/authType"
import axios from  "axios"


export const signup=(data,navigate)=>async (dispatch)=>{
 


    try {
        const res=await axios.post("/auth/signup",data)

        dispatch({type:SIGNUP,payload:res.data})
        navigate("/profile")
    } catch (error) {
        dispatch({type:FAIL,payload:error.response.data})
    }

}


export const signin=(data,navigate)=>async(dispatch)=>{


    try {
        const res=await axios.post("/auth/signin",data)
        dispatch({type:SIGNIN,payload:res.data})
         navigate("/")

    } catch (error) {
                dispatch({type:FAIL,payload:error.response.data})

    }
}


export const getcurrent=()=>async(dispatch)=>{
const token=localStorage.getItem("token")
const config={

    headers:{

        "authorization":token
    }
}

    try {
        const res=await axios.get("/auth/current",config)
    dispatch({type:GETCURRENT,payload:res.data})
    } catch (error) {
        dispatch({type:FAIL,payload:error.response.data})

        
    }
}







export const logout=()=>{
   return{type:LOGOUT}
}


export const clearerrors=()=>{
    return{type:CLEARERRORS}
}







export const getAllUsers=()=>async(dispatch)=>{
    const res=await axios.get("/auth/users")
    try {
        
    
        dispatch({type:GETUSERS,payload:res.data})
            
        
    } catch (error) {
        console.log(error)

    }
    
    
    }

    export const editUser=(id,data)=>async(dispatch)=>{
        try {
            
             await axios.put(`/auth/${id}`,data)
            
          dispatch(getAllUsers())
    
        } catch (error) {
            console.log(error)
    
        }
    }


    
    export const deleteUser=(id)=>async(dispatch)=>{

        try {
            await axios.delete(`/auth/${id}`)
            dispatch(getAllUsers())
    
            
        } catch (error) {
            console.log(error)
    
        }
    }