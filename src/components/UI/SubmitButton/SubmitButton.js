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
    console.log("submit props",props);
    return (
        <Button
            onClick={() => {
                submitHandler(parentProps,allValues);
            }}
            disabled={invalid}
            variant="contained"
            color="primary"
            className="button"
            >Submit</Button>
    )
}
const mapStateToProps=state=>{
    return{
        allValues:getFormValues('signUp')(state)
    }
}
export default connect(mapStateToProps)(SubmitButton)
