import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    newUserData: undefined,
    approvedUserData: undefined,
    message:undefined,
    type:undefined
};
const managePageStart=(state,action)=>{
    return updateObject( state, { 
        message:undefined,
        type:undefined
    });
}
const updateData = (state, action) => {
    return updateObject( state, { 
        newUserData: action.newUserData,
        approvedUserData: action.approvedUserData,
        message:undefined,
        type:undefined
     } );
};
const managePageFail = (state,action)=>{
    return updateObject( state, { 
        newUserData: [],
        approvedUserData: [],
        message:'Failed to fetch the data',
        type:'error'
     } );
}
const manageUnapprovalFail=(state,action)=>{
    return updateObject( state, { 
        message:'Failed to delete the user',
        type:'error'
    });
}
const manageApprovalFail=(state,action)=>{
    return updateObject( state, { 
        message:'Failed to approve the user',
        type:'error'
    });
}
const manageUnapprovalSuccess=(state,action)=>{
    return updateObject( state, { 
        newUserData: action.newUserData,
        message:'User deleted',
        type:'success'
    });
}
const manageApprovalSuccess=(state,action)=>{
    return updateObject( state, { 
        newUserData: action.newUserData,
        approvedUserData: action.approvedUserData,
        message:'User approved',
        type:'success'
    });
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.MANAGE_DATA_START: return managePageStart(state, action);
        case actionTypes.MANAGE_DATA_SUCCESS: return updateData(state, action);
        case actionTypes.MANAGE_DATA_FAIL: return managePageFail(state, action);
        case actionTypes.MANAGE_USER_APPROVAL_START: return state;
        case actionTypes.MANAGE_USER_APPROVAL_SUCCESS: return manageApprovalSuccess(state, action);
        case actionTypes.MANAGE_USER_APPROVAL_FAIL: return manageApprovalFail(state, action);
        case actionTypes.MANAGE_USER_UNAPPROVAL_START: return state;
        case actionTypes.MANAGE_USER_UNAPPROVAL_SUCCESS: return manageUnapprovalSuccess(state, action);
        case actionTypes.MANAGE_USER_UNAPPROVAL_FAIL: return manageUnapprovalFail(state, action);
        default:
            return state;
    }
};
export default reducer;