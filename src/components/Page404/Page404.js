import React from 'react';
import Grid from '@material-ui/core/Grid';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './Page404.css';
function Page404() {
    return (
        <Grid container direction="column" justify="center" alignItems="center" className="page404_container" spacing={3}>
            <Grid item>
                <SentimentVeryDissatisfiedIcon className="page404_icon"/>
            </Grid>
            <Grid item>
                <Typography variant="h1">404</Typography>
            </Grid>
            <Grid item>
                <Typography variant="h3">Page not found</Typography>
            </Grid>
            <Grid item>
                <Typography inline variant="h6">
                The page you are looking for doesn't exist or an other error occured              
                </Typography>
                <Typography inline variant="h6">
                Go back, or head over to <b><Link color="inherit" href="/">PBRN</Link></b> to choose a new direction.
                </Typography>
            </Grid>
        </Grid>

    )
}

export default Page404
