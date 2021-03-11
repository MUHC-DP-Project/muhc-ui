import * as actionTypes from './actionTypes';

export const displaySuccessMessage=(msg)=>{
    return {type:actionTypes.SUCCESS_MSG,message:msg}
}
export const displayErrorMessage=(msg)=>{
    return {type:actionTypes.ERROR_MSG,message:msg}
}
export const clearDisplayMessage=()=>{
    return{type:actionTypes.CLEAR_MSG};
}
