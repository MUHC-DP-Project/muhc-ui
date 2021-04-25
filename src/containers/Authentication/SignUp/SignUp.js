import React from 'react';

//@MATERIAL-UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

//@UI component
import FormMapper from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';

//@CSS
import './SignUp.css';

//@JSON Object
import {formObject} from './formObject';

//@Redux
import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';
import * as actions from '../../../store/actions/index';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © PBRN '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const useStyles = makeStyles({
    paper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '400px',
        position:'absolute',
        top:'50%',
        msTransform:'translateY(-50%)',
        transform:'translateY(-50%)',
        padding: '20px'
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
function SignUp(props) {    
    const {invalid} = props;
    const classes = useStyles();
    return (
        <div className="signUpBody">
            <Container component="main" maxWidth="xs">

                <Paper elevation={10} className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    {props.formError&&<Typography className={classes.error}>
                                {props.formError}
                            </Typography>}
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <FormMapper
                                json_obj={formObject.signUpform}
                                formName={formObject.formName}/>
                        </Grid>
                        <Button
                            className={classes.button}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={invalid}
                            onClick={(event) => {
                            event.preventDefault();
                            props.signUp(props,props.formValues,props.history);
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
        formValues: getFormValues('signUp')(state),
        formError: state.signUp.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: (parentProps,authData, redirect) => dispatch(actions.signUp(parentProps,authData, redirect))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({
    form: 'signUp',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true
})(SignUp));