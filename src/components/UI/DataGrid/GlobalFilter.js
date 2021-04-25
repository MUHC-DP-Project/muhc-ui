import React, {useState} from 'react';

//@Material-UI
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

//@React-table
import {useAsyncDebounce} from 'react-table';

const useStyles = makeStyles({
    icon: {
        marginRight: '10px'
    },
    textfield: {
        margin: '15px',
        backgroundColor: 'white',
        borderRadius: '5px',
        width: '330px'
    },
    container: {
        backgroundColor: '#222831',
        borderRadius: '5px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px'
    },
    title: {
        marginLeft: '15px',
        color: 'white'
    }
});
function GlobalFilter({filter, title, setFilter, button}) {
    const classes = useStyles();
    const [value,
        setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 300)
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.container}>
            <Grid item>
                <Typography className={classes.title} variant="h4">{title}</Typography>
            </Grid>
            <Grid item>
                <TextField
                    placeholder="Search"
                    variant="outlined"
                    className={classes.textfield}
                    size="small"
                    value={value || ''}
                    onChange={event => {
                    setValue(event.target.value);
                    onChange(event.target.value);
                }}
                    InputProps={{
                    startAdornment: <SearchIcon className={classes.icon}/>
                }}/>
            </Grid>
            {button &&<Grid item > {
                button
            }</Grid>}
        </Grid>
    )
}

export default GlobalFilter
