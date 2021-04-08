import React, {useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {v4 as uuidv4} from 'uuid';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from 'react-redux';
import {reduxForm,reset} from 'redux-form';
import SubmitButton from '../../components/UI/SubmitButton/SubmitButton';
import {projectAxios} from '../../axios-pbrn';
import formMapper from './formMapper';
//pages
import Participants from './Participants/Participants';
import ResearchAndMethodology from './ResearchAndMethodology/ResearchAndMethodology';
import Project from './Project/Project';

//CSS
import './CreateProject.css';

import * as actions from '../../store/actions/index';
import handleSubmit from './handleSubmit';

function CreateProject(props) {
    const step_component_list = [ < Participants />, < Project />, < ResearchAndMethodology />
    ]; //array of component
    const step_name_list = ["Participants", "Project", "Research and methodology"];
    const form_title = "Project";
    const [submitType, setSubmitType] = useState({
        type:'POST',
        Id:null
    });
    const [loading, setLoading] = useState(true);
    // console.log();
    useEffect(() => {
        if (props.location.state) { const projectId=props.location.state.Id;
        projectAxios
        .get('/projects/'+projectId)
        .then(response=>{
            props.loadData(formMapper(response.data))
            console.log('formapper',formMapper(response.data));
            setSubmitType({
                type:'PUT',
                id:projectId
            });
            setLoading(false);
            props.location.state=null;
        })
        .catch(error=>console.log(error))}
        else{
            props.loadData({createProject:{}})
            setLoading(false);            
        }
    }, []);
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
    const {invalid} = props;
    const backDrop = <Backdrop className="backDrop" open={loading}>
        <CircularProgress color="inherit"/>
    </Backdrop>
    const createProjectPage=<Grid container direction="row" justify="center" alignItems="center">
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
                        ? <SubmitButton
                                submitHandler={handleSubmit}
                                submitType={submitType}
                                disabled={invalid}
                                parentProps={props}
                                formName='createProject'
                                />
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
    return (
      <div>
          {loading?backDrop:createProjectPage}  
      </div>
    )

}

const mapStateToProps= state=>{
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
    form: 'createProject', // a unique identifier for this form
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true
})(CreateProject))