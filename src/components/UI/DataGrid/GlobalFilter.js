import React, {useState} from 'react';
import {useAsyncDebounce} from 'react-table';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './BasicTable.css';
function GlobalFilter(props) {
    const [value,
        setValue] = useState(props.filter)
    const onChange = useAsyncDebounce(value => {
        props.setFilter(value || undefined)
    }, 300)
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className="globalFilter">
            <Grid item>
              <Typography className="title" variant="h4">{props.title}</Typography>
            </Grid>
            <Grid item>
                <TextField
                    placeholder="Search"
                    variant="outlined"
                    className="globalFilterText"
                    size="small"
                    value={value || ''}
                    onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                    InputProps={{
                    startAdornment: <SearchIcon className="globalFilterIcon"/>
                }}/>
            </Grid>
            {props.button&&<Grid item>
              {props.button}
            </Grid>}
        </Grid>
    )
}

export default GlobalFilter
