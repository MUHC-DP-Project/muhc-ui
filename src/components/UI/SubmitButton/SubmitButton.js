import React from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {getFormValues} from 'redux-form';
import './SubmitButton.css';
function SubmitButton(props) {
    const submitHandler=props.submitHandler;
    const invalid=props.disabled;
    const allValues=props.allValues;
    const parentProps=props.parentProps;  
    const submitType=props.submitType; 
    return (
        <Button
            onClick={() => {
                submitHandler(parentProps,allValues,submitType);
            }}
            disabled={invalid}
            variant="contained"
            color="primary"
            className="button"
            >Submit</Button>
            
    )
}
const mapStateToProps=(state,ownProps)=>{
    return{
        allValues:getFormValues(ownProps.formName)(state),
    }
}
export default connect(mapStateToProps)(SubmitButton)
