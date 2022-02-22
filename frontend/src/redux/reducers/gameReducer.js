import {    GETNUMBERQUESTIONS, GETONENUMBER, GETONEQUIZ, GETQUESTIONS, GETQUIZQUESTIONS } from "../types/gameType"



const initState={
allquestions:[],
quizquestions:[],
numberquestions:[],
onequiz:{},
onenumber:{},
loading:true,



}



const gameReducer=(state=initState,action)=>{

switch (action.type) {

    case GETQUESTIONS:
        return{...state,allquestions:action.payload,loading:false}
case GETQUIZQUESTIONS:
    return{...state,quizquestions:action.payload,loading:false}
    case GETNUMBERQUESTIONS:
        return{...state,numberquestions:action.payload,loading:false}
        case GETONEQUIZ:
            return{...state,onequiz:action.payload}
            case GETONENUMBER:
                return{...state,onenumber:action.payload}

    
    
       

    default:
        return state
}


}

export default gameReducer