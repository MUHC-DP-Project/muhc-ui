import React, {useState, useCallback} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {v4 as uuidv4} from 'uuid';

import './SimpleMultipageForm.css'
import { connect } from 'react-redux'
import {reduxForm,submit,SubmissionError} from 'redux-form'

function handleSubmit(values) {
    return window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)   ;              
  }
function SimpleMultipageForm(props) {
    const step_component_list = props.step_component_list; //array of component
    const step_name_list = props.step_name_list;
    const form_title = props.form_title;

    const [active_step,
        setActive_step] = useState(0);

    function getStepContent(step_index) {
        return step_component_list[step_index];
    }

    function handleBack() {
        setActive_step(active_step - 1);
    }
    function handleNext() {
        setActive_step(active_step + 1);
    }
    const { handleSubmit, pristine, reset, submitting, classes } = props;
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Paper elevation={10} className="paper">
                <Typography component="h1" variant="h4" align="center">
                    {form_title}
                </Typography>
                <Stepper activeStep={active_step}>
                    {step_name_list.map((label) => (
                        <Step key={uuidv4()}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <React.Fragment>
                    {active_step === step_name_list.length
                        ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order confirmation, and will
                                    send you an update when your order has shipped.
                                </Typography>
                            </React.Fragment>
                        )
                        : (
                            <form>
                                <React.Fragment>
                                    <Grid container directio="column">
                                        {getStepContent(active_step)}
                                    </Grid>
                                    <div className="group_button">
                                        {active_step !== 0 && (
                                            <Button onClick={handleBack} className="button">
                                                Back
                                            </Button>
                                        )}
                                        
                                            {active_step === step_name_list.length-1
                                                ? <Button
                                            onClick={props.submit}
                                            disabled={pristine || submitting}
                                            variant="contained"
                                            color="primary"
                                            className="button"
                                            style={{
                                            marginLeft: 15
                                        }}>Submit</Button>
                                                : <Button
                                            disabled={pristine || submitting}
                                            onClick={handleNext}
                                            variant="contained"
                                            color="primary"
                                            className="button"
                                            style={{
                                            marginLeft: 15
                                        }
                                        
                                        }>Next</Button>}
                                        

                                    </div>
                                </React.Fragment>
                            </form>

                        )}
                </React.Fragment>
            </Paper>
        </Grid>
    )

}
const mapDispatchToProps = (dispatch) =>{
    return{
        submit:() => dispatch(submit('MaterialUiForm'))
    }
}
export default connect(null,mapDispatchToProps)(reduxForm({
    form: 'MaterialUiForm', // a unique identifier for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    onSubmit: handleSubmit 
})(React.memo(SimpleMultipageForm))
)