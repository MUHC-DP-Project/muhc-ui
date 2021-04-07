import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    newUserData: null,
    approvedUserData: null,
    loading: false
};
const loadData = (state, action) => {
    return updateObject( state, { 
        newUserData: action.newUserData,
        approvedUserData: action.approvedUserData,
        loading: false
     } );
};
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.LOAD_MANAGE_DATA: return loadData(state, action);
        default:
            return state;
    }
};
export default reducer;