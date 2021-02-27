import React,{useRef} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './AutoCompleteTable.css';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import {v4 as uuidv4} from 'uuid';

import {Field, FieldArray} from 'redux-form';
import MUI_TextField from '../MaterialUI/MUI_TextField';
function AutoCompleteTable(props) {
    const options = props.options;
    const text_field_name=props.text_field_name;
    const autocomplete_table_name=props.autocomplete_table_name;
    const inputEl = useRef(null);
    const [value,
        setValue] = React.useState('');
    const [optionList,
        setOptionList] = React.useState([]);


    function handleChange(value, fields) {
        if (!optionList.includes(value) && value !== null && value !== "") {
            fields.push(value);
            setValue(value);
            setOptionList(optionList.concat(value))
        }

    }

    function handleRemove(item,index,fields){
        fields.remove(index);
        setOptionList(optionList.filter(elem=>elem!==item));
    }

    const createElement = ({
        fields
    }) => {
        return (
            <div>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={3}>
                    <Grid item>
                        <Autocomplete                            
                            onChange={(event, newValue) => {
                            setValue(newValue)
                            handleChange(newValue, fields)
                        }}
                           
                            options={options}
                            style={{
                            width: 300
                        }}
                            renderInput={(params) => <TextField {...params}  placeholder="Select an option" variant="outlined"/>}/>
                    </Grid>
                    <Grid item>
                    <Field
                        name={text_field_name} 
                        component={MUI_TextField}
                        label="Other" 
                        ref={inputEl}
                        InputProps={{
            endAdornment: <IconButton color="primary" onClick={() => handleChange(inputEl.current.value, fields)}>
                    <AddCircleOutlineIcon/>
                </IconButton>
        }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    className="table"
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                    {fields.getAll() && fields
                        .getAll()
                        .map((item, index) => {
                            return (
                                <Grid
                                    item
                                    key={uuidv4()}
                                    onClick={() => handleRemove(item,index,fields)}
                                    className="table-element">
                                    <p>{item}</p>
                                </Grid>
                            );
                        })}
                </Grid>
            </div>
        );
    }


    return (
        <React.Fragment >
            <FieldArray name={autocomplete_table_name} component={createElement}/>
            
        </React.Fragment>
    )
}

export default AutoCompleteTable
