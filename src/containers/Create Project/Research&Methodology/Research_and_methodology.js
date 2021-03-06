import React from 'react';
import {v4 as uuidv4} from 'uuid';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';
function Research_and_methodology() {
    const json_obj = {
        research_and_methodology_form: {
            intended_location_study_title: {
                elementType: "title",
                elementConfig: {
                    value: "Intended McGill location/s of the study",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            intended_location_study: {
                elementType: 'multi_text_radio',
                elementConfig: {
                    radio_options: [
                        "Granting", "Pending", "Not yet sought"
                    ],
                    select_options: [
                        {
                            value: "Herzl Family Practice Centre",
                            id: uuidv4()
                        }, {
                            value: "St Mary's Family Medicine Centre",
                            id: uuidv4()
                        }, {
                            value: "CLSC Côtes des Neiges",
                            id: uuidv4()
                        }, {
                            value: "Gatineau U-FMG",
                            id: uuidv4()
                        }, {
                            value: "Jardins Roussillon U-FMG",
                            id: uuidv4()
                        }, {
                            value: "Vallée de l'Or U-FMG",
                            id: uuidv4()
                        }, {
                            value: "CLSC Metro",
                            id: uuidv4()
                        }, {
                            value: "Queen Elizabeth U-FMG",
                            id: uuidv4()
                        }, {
                            value: "CLSC Parc-Extension",
                            id: uuidv4()
                        }, {
                            value: "Santé Kildare GMF ",
                            id: uuidv4()
                        }, {
                            value: "Other McGill University",
                            id: uuidv4()
                        }, {
                            value: "University de Laval ",
                            id: uuidv4()
                        }, {
                            value: "University de Montreal",
                            id: uuidv4()
                        }, {
                            value: "University de Sherbrooke",
                            id: uuidv4()
                        }
                    ],
                    select_label: "Select an option",
                    text_label: "Study site coordinator of ",
                    radio_label: "Status of convenance at this institution",
                    rows: 1,
                    style_select: {
                        width: "360px",
                        textAlign: "center",
                        marginBottom: 20
                    },
                    name: "intended_mcgill_location",
                    select_name: 'intended_mcgill_location_select',
                    style_text: {
                        width: "330px"
                    },
                    grid_size: 12
                },
                value: [],
                validation: {},
                valid: true
            },
            intended_non_location_study_title: {
                elementType: "title",
                elementConfig: {
                    value: "Intended non-McGill location/s of the study",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            non_intended_location_study: {
                elementType: 'multi_text_radio',
                elementConfig: {
                    select_options: [
                        {
                            value: "University de laval Clinic",
                            id: uuidv4()
                        }, {
                            value: "University de Montreal",
                            id: uuidv4()
                        }, {
                            value: "University de Sherbrooke",
                            id: uuidv4()
                        }
                    ],
                    rows: 1,
                    style_select: {
                        width: "360px",
                        textAlign: "center",
                        marginBottom: 20
                    },
                    select_label: "Select an option",
                    text_label: "Site coordinator of ",
                    name: "intended_non_mcgill_location",
                    select_name: 'intended_non_mcgill_location_select',
                    style_text: {
                        width: "630px"
                    },
                    grid_size: 12
                }
            },
            research_methodology_title: {
                elementType: "title",
                elementConfig: {
                    value: "Research Methodology",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            research_methodology: {
                elementType: 'multi_text_radio',
                elementConfig: {
                    select_options: [
                        {
                            value: "Quantitative",
                            id: uuidv4()
                        }, {
                            value: "Qualitative",
                            id: uuidv4()
                        }, {
                            value: "Mixed Methods",
                            id: uuidv4()
                        }, {
                            value: "Participatory",
                            id: uuidv4()
                        }, {
                            value: "Other",
                            id: uuidv4()
                        }
                    ],
                    select_label: "Select an option",
                    text_label: "",
                    name: 'research_methodology',
                    select_name: 'research_methodology_select',
                    rows: 5,
                    style_select: {
                        width: "360px",
                        textAlign: "center",
                        marginBottom: 20
                    },
                    style_text: {
                        width: "630px"
                    },

                    grid_size: 12
                }
            },
            anticipated_milestone_title: {
                elementType: "title",
                elementConfig: {
                    value: "Anticipated date for completion of each of the following milestones",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            project_conception: {
                elementType: 'input',
                elementConfig: {
                    label: 'Project conception',
                    name: 'Project conception',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            project_designed: {
                elementType: 'input',
                elementConfig: {
                    label: 'Project designed',
                    name: 'Project designed',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            funding_sought_ignored_considered: {
                elementType: 'input',
                elementConfig: {
                    label: 'Funding sought or ignored/considered',
                    name: 'Funding sought or ignored/considered',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            ethics_approval: {
                elementType: 'input',
                elementConfig: {
                    label: 'Ethics approval',
                    name: 'Ethics approval',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            Recruitment: {
                elementType: 'input',
                elementConfig: {
                    label: 'Recruitment',
                    name: 'Recruitment',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            data_collection: {
                elementType: 'input',
                elementConfig: {
                    label: 'Data collection',
                    name: 'Data collection',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            data_analysis: {
                elementType: 'input',
                elementConfig: {
                    label: 'Data analysis',
                    name: 'Data analysis',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            knowledge_translation_dissemination: {
                elementType: 'input',
                elementConfig: {
                    label: 'Knowledge translation/dissemination',
                    name: 'Knowledge translation/dissemination',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        formName: 'createProject'
    }

    return (
        <React.Fragment>
            <SimpleMultipageForm
                json_obj={json_obj.research_and_methodology_form}
                formName={json_obj.formName}/>
        </React.Fragment>
    )
}

export default Research_and_methodology
