import React from 'react'
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

function ButtonList({userId}) {

    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={1}>
            <Grid item>
                <IconButton aria-label="Approve" size="small">
                    <CheckIcon/>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton aria-label="Refuse" size="small">
                    <ClearIcon/>
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default ButtonList
