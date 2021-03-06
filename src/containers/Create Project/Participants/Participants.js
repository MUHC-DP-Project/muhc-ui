import React from 'react'
import {v4 as uuidv4} from 'uuid';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';
function Participants() {

    const json_obj = {
        participant_form: {
            principal_investigator: {
                elementType: 'user_list',
                elementConfig: {
                    title: "Principal Investigator/s",
                    style_title: {
                        marginTop: 20,
                        marginBottom: 20
                    },
                    style: {
                        width: 350
                    },
                    symbol: "PI_",
                    grid_size: 12
                },
                value: [],
                validation: {},
                valid: true
            },
            co_investigator: {
                elementType: 'user_list',
                elementConfig: {
                    title: "Co-Investigator/s",
                    style_title: {
                        marginTop: 20,
                        marginBottom: 20
                    },
                    style: {
                        width: 350
                    },
                    symbol: "Co_",
                    grid_size: 12
                },
                value: [],
                validation: {},
                valid: true
            },
            collaborators: {
                elementType: 'user_list',
                elementConfig: {
                    title: "Collaborators",
                    style_title: {
                        marginTop: 20,
                        marginBottom: 20
                    },
                    style: {
                        width: 350
                    },
                    symbol: "Col_",
                    grid_size: 12
                },
                value: [],
                validation: {},
                valid: true
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
                        name: "study_size",
                        inputProps: {
                            name: "inputProps_Study_Size",
                            id: uuidv4()
                        }
                    },
                    grid_size: 12
                }
            },
            study_participants_title: {
                elementType: "title",
                elementConfig: {
                    value: "Study participants",
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
                    autocomplete_table_name: "study_participants_autocomplete_table",
                    text_field_name: "study_participants_text_field",
                    grid_size: 12
                },
                value: [],
                validation: {},
                valid: true
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
