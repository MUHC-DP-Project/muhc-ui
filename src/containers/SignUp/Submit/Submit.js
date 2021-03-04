import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';
function Submit() {

    const json_obj =  {
        submit_form: {
            level_of_research_title: {
                elementType: "title",
                elementConfig: {
                    value: "Self-defined level of research expertise",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            level_of_research: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem:{
                        options: [                        
                            'Novice',                     
                            'Intermediate',                        
                            'Experienced/Expert',                                                                                                  
                    ],
                    style: {width:"320px",textAlign:"center"},
                    label:"Options",
                    name:"level_of_research",
                    inputProps:{
                        name: "inputProps_level_of_research",
                        id: uuidv4()
                    }
                    },                                  
                    grid_size: 12,
                    
                },
                validation: {},
                valid: true,                            
            },
            motivation_for_joining_title: {
                elementType: "title",
                elementConfig: {
                    value: "Motivation for joining this network",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            motivation_for_joining: {
                elementType: 'autocomplete_table',
                elementConfig: {
                    options: [
                        "Register a new research project", "Network among feloow health care professionals", "Learn about what research projects are being done in the McGill primary care res" +
                                "earch network"
                    ],
                    autocomplete_table_name:"motivation_for_joining_autocomplete_table",
                    text_field_name:'motivation_for_joining_text_field',
                    grid_size: 12
                },
                value: [],
                validation: {},
                valid: true
            },
            found_about_us_title: {
                elementType: "title",
                elementConfig: {
                    value: "How did you find about the PBRN database",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            found_about_us: {
                elementType: 'autocomplete_table',
                elementConfig: {
                    options: [
                        "Colleague", "Supervisor", "Referred by PBRN personnel"
                    ],
                    autocomplete_table_name:"found_about_us_autocomplete_table",
                    text_field_name:'found_about_us_text_field',
                    grid_size: 12
                },
                value: [],
                validation: {},
                valid: true
            }
        },
        formName: 'signUp'
    }
    return (
        <React.Fragment>
           <SimpleMultipageForm json_obj={json_obj.submit_form} formName={json_obj.formName}/>  
        </React.Fragment>
    )
}

export default Submit;
