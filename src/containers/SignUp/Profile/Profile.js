import React from 'react';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';
import { v4 as uuidv4 } from 'uuid';
function Profile() {
   
const json_obj = {
    profile_form: {
        about_me_title:{
            elementType:"title",
            elementConfig:{
                value:"Salutation",
                style: {marginTop:20},
                grid_size: 12
            }
        },
        salutation: {
            elementType: 'select_text',
            elementConfig: {
                select_elem:{
                    options: [
                        "Mr",
                        "Ms",
                        "Mrs",
                        "Dr.",
                        "Prof.",
                    ],
                style: {width:"120px",textAlign:"center"},
                label:"Salutation",
                name:"salutation",
                inputProps:{
                    name: "inputProps_salutation",
                    id: uuidv4()
                },
                grid_size: 2
                
            }},
            validation: {},
            valid: true,                            
        },
        first_name: {
            elementType: 'input',
            elementConfig: {
                label: 'First Name',
                name: 'first_name',
                style: {
                    width: 330,
                    marginBottom:20
                },
                grid_size: 5
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        last_name: {
            elementType: 'input',
            elementConfig: {
                label: 'Last Name',
                name: 'last_name',
                style: {
                    width: 330,
                    marginBottom:20
                },
                grid_size: 5
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        credentials_title:{
            elementType:"title",
            elementConfig:{
                value:"Credentials/Qualifications",
                style: {marginTop:20},
                grid_size: 12
            }
        },
        credentials_qualifications: {
            elementType: 'input',
            elementConfig: {
                label: 'Credentials/Qualifications',
                name: 'credentials_qualifications',
                style: {
                    width: 600,
                    marginBottom:20
                },
                grid_size: 5
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        gender_title:{
            elementType:"title",
            elementConfig:{
                value:"Gender",
                style: {marginTop:20},
                grid_size: 12
            }
        },
        gender: {
            elementType: 'radio',
            elementConfig: {
                options: [
                    'Male',
                    'Female',
                    'Other',
                    'Choose not to disclose',
                ],
                name:"radio_gender",
                radio_label:"",
                grid_size: 12,
            },
            validation: {},
            valid: true,               
            form_label:"Gender",
        },
        communication_title:{
            elementType:"title",
            elementConfig:{
                value:"Communication method",
                style: {marginTop:20},
                grid_size: 12
            }
        },communication: {
            elementType: 'select_text',
            elementConfig: {
                select_elem:{
                    options: [                        
                    'Prefered Phone Number', 
                    'Prefered Email Address', 
                    'Alternative Email Address',                                                                       
                ],
                style: {width:"320px",textAlign:"center"},
                label:"Method of communication",
                name:"communication_select",
                inputProps:{
                    name: "inputProps_communication",
                    id: uuidv4()
                }
                },
                text_elem: {
                    name: "communication_text_field",
                    options: [
                        {
                            condition: 'Prefered Phone Number',
                            placeholder:'(xxx)-xxx-xxxx'
                        }, {
                            condition: 'Prefered Email Address', 
                            placeholder: 'example@mail.mcgill.ca'
                        }, {
                            condition: 'Alternative Email Address', 
                            placeholder: 'example@mail.mcgill.ca'
                        }
                    ],
                    style: {
                        width: 370
                    }
                },                                  
                grid_size: 12,
                
            },
            validation: {},
            valid: true,                            
        },
        principal_university_affiliation_title:{
            elementType:"title",
            elementConfig:{
                value:"Principal University Affiliation",
                style: {marginTop:20},
                grid_size: 12
            }
        },
        principal_university_affiliation: {
            elementType: 'select_text',
            elementConfig: {
                select_elem:{
                    options: [                        
                    'McGill University', 
                    'University de Laval',
                    'University de Montreal',
                    'University de Sherbrooke',
                    'Not applicable',
                    'Other'                                                                     
                ],
                style: {width:"320px",textAlign:"center"},
                label:"University name",
                name:"principal_university_affiliation_select",
                inputProps:{
                    name: "inputProps_principal_university_affiliation",
                    id: uuidv4()
                }
                },
                text_elem: {
                    name: "principal_university_affiliation_text_field",
                    options: [  
                        {
                            condition: null,
                            placeholder:null
                        },          
                        {
                            condition: 'Other',
                            placeholder:'Name'
                        }
                    ],
                    style: {width:"400px",textAlign:"center"},
                },                                  
                grid_size: 12,
                
            },
            validation: {},
            valid: true,                            
        },          
        principal_clinic_title:{
            elementType:"title",
            elementConfig:{
                value:"Principal Clinic",
                style: {marginTop:20},
                grid_size: 12
            }
        },
        principal_clinic: {
            elementType: 'select_text',
            elementConfig: {
                select_elem:{
                    options: [                        
                    'Herzl Family Practice Centre', 
                    "St Mary's Family Medicine Centre",
                    'CLSC Côtes des Neiges',
                    'Gatineau U-FMG.',
                    'Jardins Roussillon U-FMG',
                    "Vallée de l'Or U-FMG", 
                    'CLSC Metro', 
                    'Queen Elizabeth U-FMG',
                    'CLSC Parc-Extension', 
                    'Santé Kildare GMF', 
                    'Other McGill University',  
                    'University de Laval',  
                    'University de Montreal',  
                    'University de Sherbrooke',
                    'Not applicable',  
                    'Other',                                                       
                ],
                style: {width:"320px",textAlign:"center"},
                label:"Options",
                name:"principal_clinic_select",
                inputProps:{
                    name: "inputProps_principal_clinic_select",
                    id: uuidv4()
                }
                },
                text_elem: {
                    name: "principal_clinic_text_field",
                    options: [  
                        {
                            condition: null,
                            placeholder:null
                        },          
                        {
                            condition: 'Other',
                            placeholder:'Name'
                        }
                    ],
                    style: {width:"400px",textAlign:"center"},
                },                                  
                grid_size: 12,
                
            },
            validation: {},
            valid: true,                            
        }, 
        secondary_clinic_title:{
            elementType:"title",
            elementConfig:{
                value:"Secondary Clinic",
                style: {marginTop:20},
                grid_size: 12
            }
        },
        secondary_clinic: {
            elementType: 'select_text',
            elementConfig: {
                select_elem:{
                    options: [                        
                    'Herzl Family Practice Centre', 
                    "St Mary's Family Medicine Centre",
                    'CLSC Côtes des Neiges',
                    'Gatineau U-FMG.',
                    'Jardins Roussillon U-FMG',
                    "Vallée de l'Or U-FMG", 
                    'CLSC Metro', 
                    'Queen Elizabeth U-FMG',
                    'CLSC Parc-Extension', 
                    'Santé Kildare GMF', 
                    'Other McGill University',  
                    'University de Laval',  
                    'University de Montreal',  
                    'University de Sherbrooke',
                    'Not applicable',  
                    'Other',                                                       
                ],
                style: {width:"320px",textAlign:"center"},
                label:"Options",
                name:"secondary_clinic_select",
                inputProps:{
                    name: "inputProps_secondary_clinic_select",
                    id: uuidv4()
                }
                },
                text_elem: {
                    name: "secondary_clinic_text_field",
                    options: [  
                        {
                            condition: null,
                            placeholder:null
                        },          
                        {
                            condition: 'Other',
                            placeholder:'Name'
                        }
                    ],
                    style: {width:"400px",textAlign:"center"},
                },                                  
                grid_size: 12,
                
            },
            validation: {},
            valid: true,                            
        }
    },
    formName: 'signUp'
}
    return (
        <React.Fragment>
            <SimpleMultipageForm json_obj={json_obj.profile_form} formName={json_obj.formName}/>
        </React.Fragment>
    )
}

export default Profile
