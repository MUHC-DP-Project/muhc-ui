import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
function WithErrorHandler(props) {

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    function handleClose(event, reason){
        if (reason === 'clickaway') {
          return;
        }
    
        props.onClear();
      };
    return (
        <Snackbar open={props.display} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    );
}
const mapStateToProps=state=>{
  return{
    severity:state.errorHandler.severity,
    display:state.errorHandler.display,
    message:state.errorHandler.message
  };
}
const mapDispatchToProps = dispatch=>{
  return{
      onClear:()=>dispatch(actions.clearDisplayMessage())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler)


