import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {}, action) => {
    switch (action.type) {
      case actionTypes.LOAD_FORM_DATA:
        return {
          data: action.data,
        };
      default:
        return state;
    }
  };
  
export default reducer;