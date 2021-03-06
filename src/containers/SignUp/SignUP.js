import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {v4 as uuidv4} from 'uuid';

import {connect} from 'react-redux';
import {reset, reduxForm, submit} from 'redux-form';

//pages
import Profile from './Profile/Profile';
import Research_and_interest from './Research&Interest/Research_and_interest';
import Submit from './Submit/Submit';

//CSS
import './SignUp.css';
import handleSubmit from './handleSubmit';
import { columnsTotalWidthSelector } from '@material-ui/data-grid';

function SignUP(props) {
    const step_component_list = [ < Profile />, < Research_and_interest />, < Submit />
    ]; //array of component
    const step_name_list = ["Profile", "Research and interest", "Submit"];
    const form_title = "Sign Up";

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
    const {invalid, handleSubmit, reset} = props;
    console.log('props ', props);
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
                    {< form > <React.Fragment>
                        <Grid container directio="column">
                            {getStepContent(active_step)}
                        </Grid>
                        <div className="group_button">
                            {active_step !== 0 && (
                                <Button onClick={handleBack} className="button">
                                    Back
                                </Button>
                            )}

                            {active_step === step_name_list.length - 1
                                ? <Button
                                        onClick={() => {
                                        props.submit('signUp');
                                        if (props.submitSucceeded) {
                                            props.dispatch(reset('signUp'));
                                            props
                                                .history
                                                .push("/");
                                        }
                                    }}
                                        disabled={invalid}
                                        variant="contained"
                                        color="primary"
                                        className="button"
                                        style={{
                                        marginLeft: 15
                                    }}>Submit</Button>
                                : <Button
                                    disabled={invalid}
                                    onClick={handleNext}
                                    variant="contained"
                                    color="primary"
                                    className="button"
                                    style={{
                                    marginLeft: 15
                                }}>Next</Button>}

                        </div>
                    </React.Fragment> </form>}
                </React.Fragment>
            </Paper>
        </Grid>
    )

}


export default connect()(reduxForm({
    form: 'signUp', // a unique identifier for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    onSubmit: handleSubmit,
})(React.memo(SignUP)))