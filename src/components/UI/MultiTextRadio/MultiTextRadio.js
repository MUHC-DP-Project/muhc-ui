import React, {useState} from 'react';

//@Material-UI
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';

//@Redux
import {Field, FieldArray,change} from 'redux-form';

//@UI components
import MUI_TextField from '../MaterialUI/MUI_TextField';
import MUI_RadioButton from '../MaterialUI/MUI_RadioButton';
import MUI_Select from '../MaterialUI/MUI_Select';


import {v4 as uuidv4} from 'uuid';
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
    const displayselectedItem=props.displayselectedItem;
    const [value,
        setValue] = useState('');
    const [listOfElem,
        setListOfElem] = useState([]);
    function handleChange(value,fields){
        if(!listOfElem.includes(value)){
            fields.push(
               { 
                select:value,
                text:'',
                radio:null,
                id:uuidv4()
            }
            );
                setValue(value);
            setListOfElem(listOfElem.concat(value))
        }
        
    }

    function handleRemove(item,index,fields){
        fields.remove(index);
        setListOfElem(listOfElem.filter(elem=>elem!==item.select));
    }

    function handleRadioChange(event,item,index,fields){
        const tmp={...item};
        tmp.radio=event.target.value;
        fields.remove(index);
        setListOfElem(listOfElem.filter(elem=>elem!==item.select));
        fields.insert(index,tmp);
    }
    function displayItem(array){
        return (<Grid
            className="table"
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start">
            <div className="sub-table">
            {array.map((item, index) => {
                    return (
                        <Grid
                            item
                            key={uuidv4()}
                            className="table-element">
                            <p>{item.select}</p>
                        </Grid>
                    );
                })}
                </div>
        </Grid>)
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
            {displayselectedItem&&fields.getAll()&&displayItem(fields.getAll())}
            {fields.getAll()
            &&fields.getAll().map((item,index) => {
                return (
                    <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={3} key={item.id}>
                        <Grid
                            item
                            sm={radio_list != null
                            ? 5
                            : 9}>
                            <Field
                                placeholder=""
                                rows={rows}
                                component={MUI_TextField}
                                name={component_name+"_text_"+item.select}
                                label={text_label+item.select}
                                style={style_text}
                                validate={props.validate}
                                multiline
                                />
                        </Grid>
                        {radio_list != null && <Grid item sm={6}>
                        
                        <Field
                            component={MUI_RadioButton}
                            name={component_name+"_radio_"+item.select}
                            radio_list={radio_list}
                            label={radio_label}
                            onChange={event=>handleRadioChange(event,item,index,fields)}
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

export default MultiTextRadio;
