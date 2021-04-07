import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';
import {connect} from 'react-redux';
import {reduxForm,getFormValues} from 'redux-form';
import './ForgotPassword.css';
import handleSubmit from './handleSubmit';
import Paper from '@material-ui/core/Paper';
function ForgotPassword(props) {
    const [error, setError] = useState(null)
    const json_obj = {
        FPform:{
            email: {
                elementType: 'input',
                elementConfig: {
                    label: 'Email Address',
                    name: 'email',
                    style: {
                        width: 400
                    },
                    grid_size: 12,
                    validation: ["required", "validateEmail"]
                }
            }
        },
        formName: 'forgotPassword'
    }
    const {invalid} = props;
    return (
        <div className="FP_page_body">
            <Container component="main" maxWidth="xs">

                <Paper elevation={10} className="FP_paper">

                    <Typography variant="h5">
                        Forgot Password
                    </Typography>
                    <Typography>
                        Please enter your email to receive a new password
                    </Typography>
                    {error&&<Typography className="FP_error">
                                {error}
                            </Typography>}
                    <form className="FP_form">
                        <Grid container spacing={2}>
                            <SimpleMultipageForm
                                json_obj={json_obj.FPform}
                                formName={json_obj.formName}/>
                        </Grid>
                        <Button
                            className="FP_button"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={invalid}
                            onClick={(event) => {
                            event.preventDefault();
                            handleSubmit(props, props.allValues,setError);
                        }}>
                            Send New Password
                        </Button>
                    </form>
                </Paper>

            </Container>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        allValues: getFormValues('forgotPassword')(state)
    }
}
export default connect(mapStateToProps)(reduxForm({
    form: 'forgotPassword', 
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(ForgotPassword));
