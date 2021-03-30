import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//custom Input
import SelectText from '../SelectText/SelectText';
import AutoCompleteTable from '../AutoCompleteTable/AutoCompleteTable';
import ListOfUsers from '../ListOfUsers/ListOfUsers';
import ProjectFunds from '../ProjectFunds/ProjectFunds';
import MultiTextRadio from '../MultiTextRadio/MultiTextRadio';
import Calendar from '../Calendar/Calendar';
import { Field } from 'redux-form';
//MUI
import MUI_TextField from '../MaterialUI/MUI_TextField';
import MUI_RadioButton from '../MaterialUI/MUI_RadioButton';

//validator
import validators from './validators';
class Input extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    }
   
    required = value => value ? undefined : 'Required';
    renderInput = () => {
        let inputElement = null;
        switch (this.props.elementType) {
            case('title'):
                inputElement = <Typography variant="h5" gutterBottom style={this.props.elementConfig.style}>{this.props.elementConfig.value}</Typography>
                break;
            case('input'):
                inputElement =<Field
                component={MUI_TextField}
                {...this.props.elementConfig}
                validate={validators(this.props.elementConfig.validation)}                 
                />;
                
                break;
            case('radio'):
                inputElement =<Field
                component={MUI_RadioButton}
                name={this.props.elementConfig.name}
                radio_list={this.props.elementConfig.options}
                label={this.props.elementConfig.radio_label}  
                validate={validators(this.props.elementConfig.validation)}                       
                />
                break;
            case('select_text'):
                inputElement = <SelectText
                    select_list={this.props.elementConfig.select_elem.options}
                    select_props={this.props.elementConfig.select_elem}                    
                    text_props={this.props.elementConfig.text_elem}  
                    extra_text={this.props.elementConfig.extra_text}
                    select_validate={validators(this.props.elementConfig.select_elem.validation)}   
                    validators={validators}   
                    />
                break;
            case('autocomplete_table'):
                inputElement = <AutoCompleteTable
                    options={this.props.elementConfig.options}
                    text_field_name={this.props.elementConfig.text_field_name}
                    autocomplete_table_name={this.props.elementConfig.autocomplete_table_name}
                    formName={this.props.formName}
                    />
                break;
            case('user_list'):
            inputElement=<ListOfUsers field_props={{...this.props.elementConfig}} title={this.props.elementConfig.title} validate={this.required}/>
            break;
            case('project_fund'):
            inputElement=<ProjectFunds id={this.props.id} output_changed={this.props.changed} validate={this.required}/>
            break;
            case('multi_text_radio'):
            inputElement=<MultiTextRadio  
            list={this.props.elementConfig.select_options} 
            radio_list={this.props.elementConfig.radio_options} 
            radio_label={this.props.elementConfig.radio_label} 
            rows={this.props.elementConfig.rows} 
            text_label={this.props.elementConfig.text_label}
            select_label={this.props.elementConfig.select_label}
            style_text={this.props.elementConfig.style_text}
            style_select={this.props.elementConfig.style_select}
            select_name={this.props.elementConfig.select_name}
            component_name={this.props.elementConfig.name}
            displayselectedItem={this.props.elementConfig.displayselectedItem}
            formName={this.props.formName}
            validate={this.required}
            />
            break;
            case('calendar'):
            inputElement=<Field component={Calendar} validate={this.required} {...this.props.elementConfig}/>
            break;
            default:
                break;
        }
        return inputElement;
    }
    render() {
        return (
            <React.Fragment>
                <Grid item sm={this.props.elementConfig.grid_size}>
                    {this.renderInput()}
                </Grid>
            </React.Fragment>
        )
    }
}

export default Input
