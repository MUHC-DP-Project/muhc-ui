import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    myProjectData:undefined,
    projectData:undefined,
    userData:undefined
};

const homePageStart = ( state, action ) => {
    return state;
};

const updateMyProjectData = (state, action) => {
    return updateObject( state, { 
        myProjectData:action.data
     } );
};
const updateProjectData = (state, action) => {
    return updateObject( state, { 
        projectData:action.data
     } );
};

const updateUserData = (state, action) => {
    return updateObject( state, { 
        userData:action.data
     } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.HOME_DATA_START: return homePageStart(state, action);
        case actionTypes.HOME_PROJECT_DATA_SUCCESS: return updateProjectData(state, action);
        case actionTypes.HOME_PROJECT_DATA_FAIL: return updateProjectData(state, action);
        case actionTypes.HOME_MYPROJECT_DATA_SUCCESS: return updateMyProjectData(state, action);
        case actionTypes.HOME_MYPROJECT_DATA_FAIL: return updateMyProjectData(state,action);
        case actionTypes.HOME_USER_DATA_SUCCESS: return updateUserData(state, action);
        case actionTypes.HOME_USER_DATA_FAIL: return updateUserData(state,action);
        default:
            return state;
    }
};

export default reducer;