import { CLEARERRORS, FAIL, GETCURRENT, GETUSERS, LOGOUT, SIGNIN, SIGNUP } from "../types/authType";

const initState={

    user:{},
    auth:false,
    errors:[],
    change:true,
    users:[]
}

const authReducer=(state=initState,action)=>{


    switch (action.type) {
        case SIGNUP:
            case SIGNIN:
            localStorage.setItem("token",action.payload.token)
           return{...state,user:action.payload.user,auth:true }
           
           case FAIL:
           return{...state,errors:action.payload.errors,auth:false}
    case GETCURRENT:
        return{...state,user:action.payload,auth:true,change:true }

case LOGOUT:
    localStorage.removeItem("token")
    return{...state,user:{},auth:false}


    case CLEARERRORS:
        return{...state,errors:[]}
        
        case GETUSERS:
            return{...state,users:action.payload}
            

        default:
            return state
    }
}

export default authReducer