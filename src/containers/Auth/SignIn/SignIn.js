import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Typography from '@material-ui/core/Typography';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';
import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';
import "./SignIn.css";
import * as actions from '../../../store/actions/index';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                PBRN
            </Link>{' '} {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function SignIn(props) {
    const json_obj = {
        signInform: {
            email: {
                elementType: 'input',
                elementConfig: {
                    label: 'Email Address',
                    name: 'email',
                    style: {
                        marginTop: 15
                    },
                    fullWidth: true,
                    grid_size: 12,
                    validation: ["required", "validateEmail"]
                }
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    label: 'Password',
                    name: 'password',
                    style: {
                        marginTop: 15
                    },
                    fullWidth: true,
                    type: "password",
                    grid_size: 12,
                    validation: ["required"]
                }
            }
        },
        formName: 'signIn'
    }

    return (
        <Grid container component="main" className="root">
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className="background_img"/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className="signin_paper">
                    <Avatar className="signin_avatar">
                        <AssignmentIndIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className="signin_form" noValidate>

                        <SimpleMultipageForm
                            json_obj={json_obj.signInform}
                            formName={json_obj.formName}/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="signin_button"
                            onClick={event=>
                            {
                              event.preventDefault();                        
                              props.onAuth(props.authData,props.history);
                            }
                            }
                            >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright/>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => {
    return {
      authData: getFormValues('signIn')(state)
    }
}
const mapDispatchToProps = dispatch => {
  return {
      onAuth: ( authData,redirect ) => dispatch( actions.auth( authData,redirect ) )
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({
    form: 'signIn', // a unique identifier for this form
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(SignIn))
