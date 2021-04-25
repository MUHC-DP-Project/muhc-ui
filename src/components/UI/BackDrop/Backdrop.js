import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    backdrop: {
        opacity:1,
        transition:'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        color:'#fff'
    }
});

function MyBackdrop({condition}) {
    const classes = useStyles();
    return (
        <Backdrop className={classes.backdrop} open={condition}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    )
}

export default MyBackdrop;
