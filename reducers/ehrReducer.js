import {
    BILLS_LOADED_SUCCESS,PRESCRIPTIONS_LOADED_SUCCESS,DIAGNOSTICS_LOADED_SUCCESS,FILES_LOADED_SUCCESS,EHR_LOADED_FAIL
} from '../actions/types'


const initialState={
    "bills":[],
    "files":[],
    "prescriptions":[],
    "diagnostics":[]
}

export default function ehrReducer(state=initialState,action){
 const{type,payload}=action

 switch(type){
    case BILLS_LOADED_SUCCESS:
       return {
          ...state,
          bills: payload
        }
    case PRESCRIPTIONS_LOADED_SUCCESS:
        console.log("pres",payload);
        return {
            ...state,
            prescriptions: payload
          }
    case DIAGNOSTICS_LOADED_SUCCESS:
        console.log("diag",payload);
        return {
            ...state,
            diagnostics: payload
          }
    case FILES_LOADED_SUCCESS:
        return {
            ...state,
            files: payload
          }
    case EHR_LOADED_FAIL:
        return state
    default:
        return state
    }


 }
