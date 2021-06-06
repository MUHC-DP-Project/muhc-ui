import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MUI_Select from '../MaterialUI/MUI_Select'
import MUI_TextField from '../MaterialUI/MUI_TextField';
import {Field, formValueSelector} from 'redux-form';
import {connect} from 'react-redux';

import './SelectText.css';
function SelectText(props) {
    const select_list = props.select_list;
    const select_props = props.select_props;
    const text_props = props.text_props;
    const extra_text = props.extra_text;
    const select_validate=props.select_validate;
    const validators=props.validators;
    const [select, setSelect] = useState(props.selectedItem);
    const mapValidator=list=>{
            return validators(list);
    }

    return (
        <React.Fragment>
            {props&&<Grid //make sure the props loads
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className="item-align"
                spacing={2}>
                <Grid item>
                    <Field
                        component={MUI_Select}
                        menu_list={select_list}
                        {...select_props}
                        validate={select_validate}
                        onChange={event=>setSelect(event.target.value)}/>
                </Grid>
                <Grid item>
                    {text_props && select && text_props
                                    .options
                                    .find(elem => elem.condition === select)
                        ? <Field
                                component={MUI_TextField}
                                validate={mapValidator(text_props
                                    .options
                                    .find(elem => elem.condition === select).validation)}
                                disabled={select === null || text_props
                                    .options
                                    .find(elem => elem.condition === select)==null}
                                placeholder={select !== null && text_props
                                    .options
                                    .find(elem => elem.condition === select)!=null
                                ? text_props
                                    .options
                                    .find(elem => elem.condition === select)
                                    .placeholder
                                : "Select an option"}
                                {...text_props}/>
                        : null}
                </Grid>
                {extra_text != null && <Grid item>
                    <Typography>
                        {props.extra_text}
                    </Typography>
                </Grid>}
            </Grid>}
        </React.Fragment>
    )
}



const mapStatesToProps = (state,ownProps) => {
    return{
    selectedItem: formValueSelector(ownProps.formName)(state, ownProps.select_props.name)
}
}
export default connect(mapStatesToProps) (SelectText)
