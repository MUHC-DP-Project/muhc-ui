import React,{useRef} from 'react';

//@Material-UI
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import {v4 as uuidv4} from 'uuid';
import Typography from '@material-ui/core/Typography';

//@Redux
import {Field, FieldArray,change} from 'redux-form';

//@UI component
import MUI_TextField from '../MaterialUI/MUI_TextField';
import './AutoCompleteTable.css';

function AutoCompleteTable(props) {
    const options = props.options;
    const text_field_name=props.text_field_name;
    const autocomplete_table_name=props.autocomplete_table_name;
    const inputEl = useRef(null);
    const formName=props.formName;
    const isRequired=props.isRequired;
    const [optionList,
        setOptionList] = React.useState([]);
    

    function handleChange(value, fields) {
        if (!optionList.includes(value) && value !== null && value!==undefined && value.trim() !== "") {
            fields.push(value);      
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
                            handleChange(newValue, fields)
                        }}
                           
                            options={options}
                            style={{
                            width: 300
                        }}
                            renderInput={(params) => <TextField {...params}  placeholder="Select an option" variant="outlined"/>}/>
                    </Grid>
                    <Grid item>
                    {text_field_name&&<Field
                        name={text_field_name} 
                        component={MUI_TextField}
                        label="Other" 
                        ref={inputEl}
                        InputProps={{
            endAdornment: <IconButton color="primary" onClick={() => handleChange(inputEl.current.value, fields)}>
                    <AddCircleOutlineIcon/>
                </IconButton>
        }}
                        />}
                    </Grid>
                </Grid>
                
                <Grid
                    className="table"
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start">
                    <div className="sub-table">
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
                        </div>
                </Grid>
                </div>
               
        );
    }

    function required (value, allValues, props) {
        if(value === undefined){
            props.dispatch(change(formName, autocomplete_table_name, []));
        }
        if(!value || value===undefined)
            return undefined;
        else if(value.length!==0)
            return undefined;
        return 'Required';
    }

    
    return (
        <React.Fragment >
            <FieldArray name={autocomplete_table_name} validate={isRequired?required:null} component={createElement}/> 
            <Typography variant="h8" inline><b>*Click on the selected item to delete it from the table</b></Typography>       
        </React.Fragment>
    )
}

export default AutoCompleteTable
