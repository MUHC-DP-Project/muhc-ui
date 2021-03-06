import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MUI_Select from '../MaterialUI/MUI_Select'
import MUI_TextField from '../MaterialUI/MUI_TextField';

import {Field} from 'redux-form';

function SelectText(props) {
    const select_list = props.select_list;
    const select_props = props.select_props;
    const text_props = props.text_props;
    const extra_text = props.extra_text;
    const [select, setSelect] = useState(null);
    return (
        <React.Fragment>
            {props&&<Grid //make sure the props loads
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={2}>
                <Grid item>
                    <Field
                        component={MUI_Select}
                        menu_list={select_list}
                        {...select_props}
                        validate={props.validate}
                        onChange={event=>setSelect(event.target.value)}/>
                </Grid>
                <Grid item>
                    {text_props != null && (select !== null && text_props
                                    .options
                                    .find(elem => elem.condition === select)!=null)
                        ? <Field
                                component={MUI_TextField}
                                validate={props.validate}
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



export default SelectText
