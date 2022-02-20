import {   GETNUMBERQUESTIONS, GETQUESTIONS, GETQUIZQUESTIONS } from "../types/gameType"



const initState={
allquestions:[],
quizquestions:{},
numberquestions:[],
loading:true,
response:false


}



const gameReducer=(state=initState,action)=>{

switch (action.type) {

    case GETQUESTIONS:
        return{...state,allquestions:action.payload,loading:false}
case GETQUIZQUESTIONS:
    return{...state,quizquestions:action.payload,loading:false}
    case GETNUMBERQUESTIONS:
        return{...state,numberquestions:action.payload,loading:false}

    
       

    default:
        return state
}


}

export default gameReducer