import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';


//Icons
import Fab from '@material-ui/core/Fab';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';

import {Field, FieldArray,change} from 'redux-form';
import MUI_TextField from '../MaterialUI/MUI_TextField';
import MUI_RadioButton from '../MaterialUI/MUI_RadioButton';
import MUI_Select from '../MaterialUI/MUI_Select'
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
    const select_name=props.select_name;
    const formName=props.formName;
    const [value,
        setValue] = useState('');
    const [listOfElem,
        setListOfElem] = useState([]);
    const [blur, setblur] = useState(false)
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
    const createElement = ({ fields}) => {
        
        return (<div>
            <Field
                        component={MUI_Select}
                        select_style={select_style}
                        menu_list={list}
                        label={select_label}
                        value={value}
                        validate={props.validate}
                        name={select_name}
                        onChange={(event) => handleChange(event.target.value,fields) }/>
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
                                validate={props.validate}
                                multiline
                                />
                        </Grid>
                        {radio_list != null && <Grid item sm={6}>
                        
                        <Field
                            component={MUI_RadioButton}
                            name={"radio"+item}
                            radio_list={radio_list}
                            label={radio_label}
                            validate={props.validate}
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
    function required (value, allValues, props) {
        if(value === undefined){
            props.dispatch(change(formName, component_name, []));
        }
        if(!value || value===undefined)
            return undefined;
        else if(value.length!==0)
            return undefined;
        return 'Required';
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
                    <FieldArray name={component_name} validate={required} component={createElement}/>
                </Grid>
                

            </Grid>

        </React.Fragment>
    )
}

export default React.memo(MultiTextRadio, (props, nextProps) => {
    return true;
});
