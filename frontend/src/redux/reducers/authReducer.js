import { CLEARERRORS, FAIL, GETCURRENT, LOGOUT, SIGNIN, SIGNUP } from "../types/authType";

const initState={

    user:{},
    auth:false,
    errors:[]
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
        return{...state,user:action.payload,auth:true }

case LOGOUT:
    localStorage.removeItem("token")
    return{...state,user:{},auth:false}


    case CLEARERRORS:
        return{...state,errors:[]}

        default:
            return state
    }
}

export default authReducer