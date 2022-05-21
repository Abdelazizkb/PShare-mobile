import {
    LOGIN_FAIL, LOGIN_SUCCESS,
    USER_LOADED_SUCCESS, USER_LOADED_FAIL,
    RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL,
    RESET_PASSWORD_CONFIRM_SUCCESS, RESET_PASSWORD_CONFIRM_FAIL,
    SIGNUP_SUCCESS, SIGNUP_FAIL,
    ACTIVATION_SUCCESS, ACTIVATION_FAIL,
    CATEGORIES_LOADED_SUCCESS,CATEGORIES_LOADED_FAIL,
    COMPANIES_LOADED_SUCCESS,COMPANIES_LOADED_FAIL,
    LOGOUT
} from './types'

import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
export const DOMAIN = 'http://192.168.42.221:8000'



export const loadUser = () => async (dispatch) => {

    const access =await AsyncStorage.getItem('access');

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${access}`,
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${DOMAIN}/auth/users/me/`, config);
        dispatch({
            type: USER_LOADED_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        dispatch({
            type: USER_LOADED_FAIL,
        })
    }

}

export const login = (email, password) => async (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    const body = JSON.stringify({ email, password});

    try {
        const res = await axios.post(`${DOMAIN}/auth/jwt/create/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(loadUser())
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: LOGIN_FAIL,
        })
    }



}

export const resetPassword = (email) => async (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    const body = JSON.stringify({ email });

    try {
        const res = await axios.post(`${DOMAIN}/auth/users/reset_password/`, body, config);
        dispatch({
            type: RESET_PASSWORD_SUCCESS,
        })
    }
    catch (err) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
        })
    }




}

export const resetPasswordConfirm = (uid, token, new_password, re_new_password) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    try {
        const res = await axios.post(`${DOMAIN}/auth/users/reset_password_confirm/`, body, config);
        dispatch({
            type: RESET_PASSWORD_CONFIRM_SUCCESS,
        })
    }
    catch (err) {
        dispatch({
            type: RESET_PASSWORD_CONFIRM_FAIL,
        })
    }


}


export const createCompany = (email,first_name,last_name,category,c_name,birthday,phone,inn,password,re_password,is_doctor=0) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    const body = JSON.stringify({ email,first_name,last_name,category,c_name,birthday,phone,inn,password,re_password,is_doctor});

    axios.post(`${DOMAIN}/auth/company/new/`, body, config)
        .then(res => {
            dispatch({
                type: SIGNUP_SUCCESS,
            })
        })

        .catch(
            err => {
                console.log(err)
                dispatch({ type: SIGNUP_FAIL, })

            })

}

export const signUp = (email,first_name,last_name,birthday,phone,inn,password,re_password,company=null,is_doctor=0) => async (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };


    const body = JSON.stringify({ email,first_name,last_name,birthday,phone,inn,password,re_password,company,is_doctor});

    try {
        const res = await axios.post(`${DOMAIN}/auth/users/`, body, config);
        dispatch({
            type: SIGNUP_SUCCESS,
        })
    }
    catch (err) {
        err => {
            dispatch({ type: SIGNUP_FAIL, })
        }
    }

}

export const verify = (uid, token) => async (dispatch) => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ uid, token });

    const res = await axios.post(`${DOMAIN}/auth/users/activation/`, body, config)
        .then(
            res => {return res },
        )
        .catch(
            err => { return err },
        );
}

export const logout = () => async (dispatch) => {

    dispatch({
        type: LOGOUT,
    })

}

export const loadCategories= () => async (dispatch) =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${DOMAIN}/auth/category/list/`);
        dispatch({
            type: CATEGORIES_LOADED_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        dispatch({
            type: CATEGORIES_LOADED_FAIL,
        })
    }
}

export const loadCompanies= () => async (dispatch) =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    try {
        const res = await axios.get(`${DOMAIN}/auth/company/list/`);
        dispatch({
            type: COMPANIES_LOADED_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        dispatch({
            type:  COMPANIES_LOADED_FAIL,
        })
    }
}