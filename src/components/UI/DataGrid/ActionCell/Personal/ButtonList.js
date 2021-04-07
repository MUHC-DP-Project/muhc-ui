import React from 'react'
import Grid from '@material-ui/core/Grid';
//icons
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
function ButtonList({id,privilege}) {
    return (
        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1}>
            <Grid item>
                <IconButton aria-label="view" size="small">
                    <VisibilityIcon fontSize="small"/>
                </IconButton>
            </Grid>
            {privilege==="author"&&<Grid item>
                <IconButton aria-label="edit" size="small">
                    <EditIcon fontSize="small"/>
                </IconButton>
            </Grid>}
            {privilege==="author"&& <Grid item>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small"/>
                </IconButton>
            </Grid>}
        </Grid>
    )
}

export default React.memo(ButtonList);
