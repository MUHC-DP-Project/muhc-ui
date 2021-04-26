import React, {useState} from 'react';

//@Material-UI
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';

//@CSS
import './Datagrid.css';

function ColumnFilter({column}) {
    const {filterValue, setFilterValue} = column;
    const [open,
        setOpen] = useState(false);
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item>
                <IconButton aria-label="sort desc" size="small" onClick={() => setOpen(!open)}>
                    <SearchIcon fontSize="small"/>
                </IconButton>
            </Grid>
            <Grid item>
                {open &&<Grow
                className = "headerTextSearch" in = {
                    open
                }
                {
                    ...(open
                        ? {
                            timeout: 1000
                        }
                        : {})
                } > <input
                    value={filterValue || ''}
                    onChange={event => setFilterValue(event.target.value)}/> </Grow>}
            </Grid>
        </Grid>
    )
}

export default ColumnFilter
