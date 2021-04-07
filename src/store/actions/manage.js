import * as actionTypes from './actionTypes';

export const loadData=(newUserData,approvedUserData)=>{
    return {type:actionTypes.LOAD_MANAGE_DATA,newUserData:newUserData,approvedUserData:approvedUserData}
}
