import {combineReducers} from "redux"
import authReducer from "./authReducer"
import ehrReducer from "./ehrReducer"

export const rootReducer=combineReducers({auth:authReducer,ehr:ehrReducer})