import React, {useState} from 'react';

//@Material-UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

//@Components
import InputMapper from '../../../components/UI/InputMapper/InputMapper';

//@Redux
import {connect} from 'react-redux';
import {reduxForm, getFormValues} from 'redux-form';

//@CSS
import './ForgotPassword.css';

//@HandleSubmit
import handleSubmit from './handleSubmit';
import {formObject} from './formObject';

const useStyles = makeStyles({
    paper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '400px',
        margin: '0px',
        position: 'absolute',
        top: '50%',
        msTransform: 'translateY(-50%)',
        transform: 'translateY(-50%)',
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

function ForgotPassword(props) {
    const classes = useStyles();
    const [error,
        setError] = useState(null);
    
    const {invalid} = props;
    return (
        <div className="forgetPasswordBody">
            <Container component="main" maxWidth="xs">
                <Paper elevation={10} className={classes.paper}>
                    <Typography variant="h5">
                        Forgot Password
                    </Typography>
                    <Typography>
                        Please enter your email to receive a new password
                    </Typography>
                    {error &&<Typography className = {classes.error} > 
                        {error}
                    </Typography>}
                    <form className={classes.form}>
                        <Grid container spacing={2}>
                            <InputMapper formObject={formObject.forgotPasswordForm} formName={formObject.formName}/>
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
                            handleSubmit(props, props.allValues, setError);
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
export default connect(mapStateToProps)(reduxForm({form: 'forgotPassword', destroyOnUnmount: true, forceUnregisterOnUnmount: true})(ForgotPassword));
