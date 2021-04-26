import React, {useState,useEffect} from 'react'

//@Material-UI
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

//@Redux
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import * as actions from '../../store/actions/index';

import {userAxios} from '../../axios-pbrn';
import formMapper from './formMapper';
import handleSubmit from './handleSubmit';

//@Pages
import AboutMe from './AboutMe/AboutMe';
import ResearchAndInterest from './Research&Interest/Research_and_interest';
import Submit from './Submit/Submit';


//@UI components
import SubmitButton from '../../components/UI/SubmitButton/SubmitButton';
import Backdrop from '../../components/UI/BackDrop/Backdrop';
import {v4 as uuidv4} from 'uuid';

const useStyles = makeStyles({
    paper: {
        width:'900px',
        marginTop:'48px',
        marginBottom:'48px',
        padding:'24px'
    },
    button:{
        width:'150px'
    },
    groupedButton:{
        display:'flex',
        justifyContent:'flex-end',
        marginTop:'60px'
    }
});

function Profile(props) {
    const classes = useStyles();
    const stepComponents = [ <AboutMe/>, <ResearchAndInterest/>, <Submit/>]; 
    const stepNames = ["About Me", "Research and interest", "Submit"];
    const formTitle = "Profile";
    const userId=localStorage.getItem('userId');
    const {invalid} = props;
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        userAxios
        .get(`/users/${userId}`)
        .then(response=>{
            props.loadData(formMapper(response.data))
            setLoading(false);
        })
        .catch(error=>{props.onError("Could not load the user profile!")})
    }, []);
    
    const [active_step,
        setActive_step] = useState(0);

    function getStepContent(step_index) {
        return stepComponents[step_index];
    }

    function handleBack() {
        setActive_step(active_step - 1);
    }
    function handleNext() {
        setActive_step(active_step + 1);
    }
    const backDrop = <Backdrop  condition={loading}/>
        
    const createProjectPage= <Grid container direction="row" justify="center" alignItems="center">
    <Paper elevation={10} className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
            {formTitle}
        </Typography>
        <Stepper activeStep={active_step}>
            {stepNames.map((label) => (
                <Step key={uuidv4()}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>

        <React.Fragment>
            {<form> <React.Fragment>
                <Grid container directio="column">
                    {getStepContent(active_step)}
                </Grid>
                <div className={classes.groupedButton}>
                    {active_step !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                            Back
                        </Button>
                    )}

                    {active_step === stepNames.length - 1
                        ? <SubmitButton
                                submitHandler={handleSubmit}
                                disabled={invalid}
                                parentProps={props}
                                formName='createProfile'
                                />
                        : <Button
                            disabled={invalid}
                            onClick={handleNext}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            style={{
                            marginLeft: 15
                        }}>Next</Button>}

                </div>
            </React.Fragment> </form>}
        </React.Fragment>
    </Paper>
</Grid>
    return (
       <div>
           {loading?backDrop:createProjectPage} 
       </div>
    )

}

const mapStateToProps= state =>{
    return{
        initialValues:state.formLoader.data
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSuccess: (msg) => dispatch(actions.displaySuccessMessage(msg)),
        onError: (msg) => dispatch(actions.displayErrorMessage(msg)),
        loadData:(data) => dispatch(actions.load(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'createProfile', // a unique identifier for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true
})(Profile))