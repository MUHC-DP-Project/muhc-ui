import React from 'react'
import Grid from '@material-ui/core/Grid';
import {v4 as uuidv4} from 'uuid';
import './ProjectFunds.css';

import MUI_Select from '../MaterialUI/MUI_Select';
import MUI_TextField from '../MaterialUI/MUI_TextField';

import {connect} from 'react-redux';
import {Field, formValueSelector} from 'redux-form';
function ProjectFunds(props) {
    
    const select_props_1 = {
        select_elem: {
            menu_list: [
                {value:"Project has been fund",id:uuidv4()}, {value:"Project has not been fund",id:uuidv4()}
            ],
            style: {
                width: "240px",
                textAlign: "center"
            },
            label: "Has this project been funded already",
            name: "project_fund_select",
            inputProps: {
                name: "inputProps_project_fund_select",
                id: uuidv4()
            },
            value:"Project has been fund"
        }
    }
    const select_props_2 = {

        select_elem: {
            menu_list: [
                {value:"Funding will be sought",id:uuidv4()}, {value:"Funding will not be sought",id:uuidv4()}
            ],
            style: {
                width: "240px",
                textAlign: "center"
            },
            label: "Funding sought",
            name: "project_sought_fund_select",
            inputProps: {
                name: "inputProps_project_sought_fund_select",
                id: uuidv4()
            },
            value:"Funding will be sought"
        }
    }

    const text_props = {
        name: 'agency_name',
        multiline: false,
        style: {
            width: 250
        }
    }


    return (
        <React.Fragment>
            <Grid container>
                <Grid item sm={3} className="spacing">
                    <Field component={MUI_Select} {...select_props_1.select_elem} validate={props.validate}/>
                </Grid>
                <Grid item sm={4} className="spacing">
                    {(props.isFund !== "Project has not been fund" || props.isFund==null)
                        ? <Field component={MUI_TextField} {...text_props} validate={props.validate} placeholder={props.isFund==null?"Select an option":'Agency Name'} disabled={props.isFund==null}/>
                        : <Field component={MUI_Select}  {...select_props_2.select_elem} validate={props.validate}/>
                }
                </Grid>
                <Grid item sm={4}>
                    {(props.isSought === "Funding will be sought" && props.isFund === "Project has not been fund") &&  <Field component={MUI_TextField} {...text_props} placeholder={props.isFund==null?"Select an option":'Intended source of funding'} disabled={props.isFund==null} validate={props.validate}/>}
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

const selector = formValueSelector('createProject');//can be refactored with useState in the future
const mapStatesToObject = state => ({
    isFund: selector(state, 'project_fund_select'),
    isSought: selector(state, 'project_sought_fund_select')
})
export default connect(mapStatesToObject)(ProjectFunds);
