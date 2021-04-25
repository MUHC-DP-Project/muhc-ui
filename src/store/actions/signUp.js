import {userAxios} from '../../axios-pbrn';
import * as actionTypes from './actionTypes';
import {reset} from 'redux-form';

export const signUpStart = () => {
    return {type: actionTypes.SIGNUP_START};
};

export const signUpSuccess = (token, user) => {
    return {type: actionTypes.SIGNUP_SUCCESS, tokenId: token, userId: user};
};

export const signUpFail = (error) => {
    return {type: actionTypes.SIGNUP_FAIL, error: error};
};

export const signUp = (parentprops,authData, redirect) => {
    return dispatch => {
        dispatch(signUpStart());
        userAxios
        .post('/auth/signUp', authData)
        .then(response => {
            parentprops.dispatch(reset('signUp'));
            redirect.replace("/signIn");
        })
        .catch(error => {
            dispatch(signUpFail(error.response.data.message))
        })    
    };
};