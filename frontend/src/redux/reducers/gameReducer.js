import {     GETONENUMBER, GETONEQUESTION, GETONEQUIZ, GETQUESTIONS, TOGGLEFALSE, TOGGLETRUE } from "../types/gameType"



const initState={
allquestions:[],
onequestion:{},
edit:false



}



const gameReducer=(state=initState,action)=>{

switch (action.type) {

    case GETQUESTIONS:
        return{...state,allquestions:action.payload}
        case GETONEQUIZ:
        case GETONENUMBER:
            case GETONEQUESTION:
            return{...state,onequestion:action.payload}
                          case TOGGLETRUE:
                       return{...state,edit:true}
                        case TOGGLEFALSE:
                            return{...state,edit:false}
         

    default:
        return state
}


}

export default gameReducer