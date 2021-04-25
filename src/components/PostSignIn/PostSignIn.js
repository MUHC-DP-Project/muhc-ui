import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        marginTop:'64px',
        width:'700px',
        height:'300px'
    },
    container: {
        margin:'20px'
    }
});

function PostSignIn() {
    const isApproved = localStorage.getItem('isApproved');
    const isEmailVerified = localStorage.getItem('isEmailVerified');
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Paper elevation={10} className={classes.paper}>

                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.container}
                    spacing={3}>
                    <Grid item>
                        <Typography variant="h3">Access Denied</Typography>
                    </Grid>
                    <Grid item>
                        <b>
                            <Typography variant="h6">Sorry your account is currently uncompleted due to the following:</Typography>
                        </b>
                    </Grid>
                    <Grid item>
                        <ul>
                            {isApproved === "false" && <li>
                                <Typography inline variant="h6">Account is not approved yet !</Typography>
                            </li>}
                            {isEmailVerified === "false" && <li>
                                <Typography inline variant="h6">You have not confirmed the email !</Typography>
                            </li>}
                        </ul>
                        <Typography inline variant="h6">If you think this is an error, please email:
                            <b>pbrn.fammed@mcgill.ca</b>!</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>

    )
}

export default PostSignIn
