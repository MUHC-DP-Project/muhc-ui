import React,{useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';
import {userAxios} from '../../../axios-pbrn';
function Participants() {

    let filteredData=[];
    useEffect(() => {
        userAxios
        .get('/users')
        .then(response=>{           
            const rawData=response.data;       
            const emailUser=localStorage.getItem('email');   
            rawData.forEach(element => {
                if(element.isApproved && element.email!==emailUser){
                    filteredData.push(
                        element.email
                    )  
                }
            });
        })
        .catch(error => {
            console.log("Failed to fetch data: ", error.response);
        });
    }, []);
    const json_obj = {
        participant_form: {
            principal_investigator_title: {
                elementType: "title",
                elementConfig: {
                    value: "Principal Investigator/s (select as many as applied)",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            principal_investigator: {
                elementType: 'autocomplete_table',
                elementConfig: {
                    options: filteredData,
                    autocomplete_table_name: "principalInvestigators",
                    required:false,
                    grid_size: 12
                }
            },
            co_investigator_title: {
                elementType: "title",
                elementConfig: {
                    value: "Co-Investigator/s(select as many as applied)",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            co_investigator: {
                elementType: 'autocomplete_table',
                elementConfig: {
                    options: filteredData,
                    autocomplete_table_name: "coInvestigators",
                    required:false,
                    grid_size: 12
                }
            },
            collaborators_title: {
                elementType: "title",
                elementConfig: {
                    value: "Collaborators (select as many as applied)",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            collaborators: {
                elementType: 'autocomplete_table',
                elementConfig: {
                    options: filteredData,
                    autocomplete_table_name: "collaborators",
                    required:false,
                    grid_size: 12
                }
            },   
            study_size_title: {
                elementType: "title",
                elementConfig: {
                    value: "Study size",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            study_size: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: '0-15',
                                id: uuidv4()
                            }, {
                                value: '16-30',
                                id: uuidv4()
                            }, {
                                value: '31-50',
                                id: uuidv4()
                            }, {
                                value: '51-100',
                                id: uuidv4()
                            }, {
                                value: '101-200',
                                id: uuidv4()
                            }, {
                                value: '201-500',
                                id: uuidv4()
                            }, {
                                value: '501+',
                                id: uuidv4()
                            }
                        ],
                        style: {
                            width: "220px",
                            textAlign: "center"
                        },
                        label: "Study Size",
                        name: "studySize",
                        inputProps: {
                            name: "inputProps_Study_Size",
                            id: uuidv4()
                        },
                        validation: ["required"],
                        
                    },
                    grid_size: 12,
                    
                }
            },
            study_participants_title: {
                elementType: "title",
                elementConfig: {
                    value: "Study participants (select as many as applied)",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            study_participants: {
                elementType: 'autocomplete_table',
                elementConfig: {
                    options: [
                        "Physicians",
                        "Residents",
                        "Medical students",
                        "Allied health professionals",
                        "Allied Health students",
                        "Administrative or technical staff",
                        "Director/Managers"
                    ],
                    autocomplete_table_name: "studyParticipants",
                    text_field_name: "study_participants_text_field",
                    required:true,
                    grid_size: 12
                }
            }

        },
        formName: 'createProject'
    }

    return (
        <React.Fragment>
            <SimpleMultipageForm
                json_obj={json_obj.participant_form}
                formName={json_obj.formName}/>
        </React.Fragment>
    )
}

export default Participants