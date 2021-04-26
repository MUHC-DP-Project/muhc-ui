import React from 'react';

//@Material-UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Typography from '@material-ui/core/Typography';
import InputMapper from '../../../components/UI/InputMapper/InputMapper';
import {makeStyles} from '@material-ui/core/styles';

//@Redux
import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';
import * as actions from '../../../store/actions/index';

//@JSON Object
import {formObject} from './formObject';

//@CSS
import "./SignIn.css";

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
const useStyles = makeStyles({
    root: {
        height: '100vh'
    },
    paper: {
        display: 'flex',
        margin: '64px 32px',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: '8px',
        backgroundColor: '#f50057'
    },
    form: {
        width: '100%',
        marginTop: '24px'
    },
    button: {
        margin: '24px 0px 16px',
        width: '100%'
    },
    error: {
        color: 'red'
    }
});
function SignIn(props) {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={false} sm={4} md={7} className="signInBody"/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AssignmentIndIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {props.formError && <Typography className={classes.error}>
                        {props.formError}
                    </Typography>}
                    <form className={classes.form}>

                        <InputMapper
                            formObject={formObject.signInForm}
                            formName={formObject.formName}/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            onClick={event => {
                            event.preventDefault();
                            props.onAuth(props.authData, props.history);
                        }}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/forgotpassword" variant="body2">
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
        authData: getFormValues('signIn')(state),
        formError: state.auth.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAuth: (authData, redirect) => dispatch(actions.auth(authData, redirect))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'signIn', destroyOnUnmount: true, forceUnregisterOnUnmount: true})(SignIn))
