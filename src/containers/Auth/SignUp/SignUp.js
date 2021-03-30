import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';
import {connect} from 'react-redux';
import {reduxForm,getFormValues} from 'redux-form';
import './SignUp.css';
import handleSubmit from './handleSubmit';
import Paper from '@material-ui/core/Paper';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © PBRN '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function SignUp(props) {

    const json_obj = {
        signUpform: {
            first_name: {
                elementType: 'input',
                elementConfig: {
                    label: 'First Name',
                    name: 'firstName',
                    style: {
                        width: 190
                    },
                    grid_size: 6,
                    validation: ["required"]
                }
            },
            last_name: {
                elementType: 'input',
                elementConfig: {
                    label: 'Last Name',
                    name: 'lastName',
                    style: {
                        width: 190
                    },
                    grid_size: 6,
                    validation: ["required"]
                }
            },
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
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    label: 'Password',
                    name: 'password',
                    style: {
                        width: 400
                    },
                    // type: "password",
                    grid_size: 12,
                    validation: ["required"]
                }
            },
            verificationNote: {
                elementType: 'input',
                elementConfig: {
                    label: 'Verification Note',
                    name: 'verificationNotes',
                    style: {
                        width: 400
                    },
                    multiline: true,
                    rows: 3,
                    rowsMax: 3,
                    grid_size: 12,
                    validation: ["required"]
                }
            }
        },
        formName: 'signUp'
    }
    const {invalid} = props;
    return (
        <div className="signup_page_body">
            <Container component="main" maxWidth="xs">

                <Paper elevation={10} className="signup_paper">
                    <Avatar className="signup_avatar">
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className="signup_form">
                        <Grid container spacing={2}>
                            <SimpleMultipageForm
                                json_obj={json_obj.signUpform}
                                formName={json_obj.formName}/>
                        </Grid>
                        <Button
                            className="signup_button"
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={invalid}
                            onClick={(event) => {
                            event.preventDefault();
                            handleSubmit(props, props.allValues);
                        }}>
                            Sign Up
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>

                    </form>
                    <Box mt={5}>
                        <Copyright/>
                    </Box>
                </Paper>

            </Container>
        </div>

    );
}
const mapStateToProps = (state) => {
    return {
        allValues: getFormValues('signUp')(state)
    }
}
export default connect(mapStateToProps)(reduxForm({
    form: 'signUp', // a unique identifier for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
})(SignUp));