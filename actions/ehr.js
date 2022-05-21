import {
    BILLS_LOADED_SUCCESS,PRESCRIPTIONS_LOADED_SUCCESS,DIAGNOSTICS_LOADED_SUCCESS,FILES_LOADED_SUCCESS,EHR_LOADED_FAIL
} from './types'

import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DOMAIN} from './auth'



export const loadEhr = (type,reducerAction) => async (dispatch) => {

    const access =await AsyncStorage.getItem('access');

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${access}`,
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${DOMAIN}/ehr/${type}`, config);
          
        dispatch({
            type:reducerAction,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: EHR_LOADED_FAIL,
        })
    }

}

export const loadBills = () => async (dispatch) =>{
    dispatch(loadEhr("bill",BILLS_LOADED_SUCCESS))
}

export const loadFiles = () => async (dispatch) =>{
    dispatch(loadEhr("file",FILES_LOADED_SUCCESS))
}

export const loadPrescriptions = () => async (dispatch)=>{
    dispatch(loadEhr("prescription",PRESCRIPTIONS_LOADED_SUCCESS))
}

export const loadDiagnostic = () => async (dispatch)=>{
    dispatch(loadEhr("diagnostic",DIAGNOSTICS_LOADED_SUCCESS))
}
