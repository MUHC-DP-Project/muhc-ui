import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    error: null,
    loading: false
};

const signUpStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const signUpSuccess = (state, action) => {
    return updateObject( state, { 
        error: null,
        loading: false
     } );
};

const signUpFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false,
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SIGNUP_START: return signUpStart(state, action);
        case actionTypes.SIGNUP_SUCCESS: return signUpSuccess(state, action);
        case actionTypes.SIGNUP_FAIL: return signUpFail(state, action);
        default:
            return state;
    }
};

export default reducer;