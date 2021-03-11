import * as actionTypes from '../actions/actionTypes';

const initialState = { //all the initial form for SignUp
    severity: null, //success,error
    display: false,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SUCCESS_MSG:
            return {
                severity:'success',
                display:true,
                message:action.message
            };
        case actionTypes.ERROR_MSG:
            return {
                severity:'error',
                display:true,
                message:action.message
            };
        case actionTypes.CLEAR_MSG:
            return {
                severity:'error',
                display:false,
                message:''
            };
        default:
            return state;
    }    
}

export default reducer;