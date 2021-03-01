import React, {useState, useMemo} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';


//Icons
import Fab from '@material-ui/core/Fab';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import {v4 as uuidv4} from 'uuid';

import {Field, FieldArray} from 'redux-form';
import MUI_TextField from '../MaterialUI/MUI_TextField';
import MUI_RadioButton from '../MaterialUI/MUI_RadioButton';
function MultiTextRadio(props) {
    const list = props.list;
    const radio_list = props.radio_list;
    const radio_label = props.radio_label;
    const select_label=props.select_label;
    const text_label = props.text_label;
    const rows = props.rows;
    const select_style=props.style_select;
    const style_text=props.style_text;
    const component_name=props.component_name;
    console.log(component_name);
    const [value,
        setValue] = useState('');
    const [listOfElem,
        setListOfElem] = useState([]);
    function handleChange(value,fields){
        console.log(value)
        if(!listOfElem.includes(value)){
            fields.push(value);
            setValue(value);
            setListOfElem(listOfElem.concat(value))
        }
        
    }

    function handleRemove(item,index,fields){
        fields.remove(index);
        setListOfElem(listOfElem.filter(elem=>elem!==item));
    }

    const createElement = ({ fields, meta: { touched, error, submitFailed } }) => {
        
        return (<div>
            <FormControl style={select_style} variant="outlined">
                <InputLabel>{props.select_label}</InputLabel>
                <Select value={value} onChange={(event) => handleChange(event.target.value,fields) }>
                    {list.map(item => {
                        return item.charAt(0) === "*"
                            ? <ListSubheader key={uuidv4()}>{item.slice(1)}</ListSubheader>
                            : <MenuItem key={uuidv4()} value={item}>{item}</MenuItem>
                    })}
                </Select>
            </FormControl>
            {fields.getAll()
            &&fields.getAll().map((item,index) => {
                return (
                    <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={3} key={item.name}>
                        <Grid
                            item
                            sm={radio_list != null
                            ? 5
                            : 9}>
                            <Field
                                placeholder=""
                                rows={rows}
                                component={MUI_TextField}
                                name={item}
                                label={text_label+item}
                                style={style_text}
                                multiline
                                />
                        </Grid>
                        {radio_list != null && <Grid item sm={6}>
                        
                        <Field
                            component={MUI_RadioButton}
                            name={"radio"+item}
                            radio_list={radio_list}
                            label={radio_label}
                            />
                        </Grid>}

                        <Grid item sm={1}>
                            <Fab
                                size="small"
                                color="secondary"
                                aria-label="add"
                                onClick={() => handleRemove(item,index,fields)}>
                                <RemoveSharpIcon/>
                            </Fab>

                        </Grid>
                    </Grid>
                )
            })
            }
            </div>
        );
    }

   
    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={3}>
                <Grid item sm={12}>
                    <FieldArray name={component_name} component={createElement}/>
                </Grid>
                

            </Grid>

        </React.Fragment>
    )
}

export default React.memo(MultiTextRadio, (props, nextProps) => {
    return true;
});
