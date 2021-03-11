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
                    name: "intendedMcgillLocation",
                    select_name: 'intendedMcgillLocation_select',
                    style_text: {
                        width: "330px"
                    },
                    grid_size: 12
                }
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
                    name: "intendedNonMcgillLocation",
                    select_name: 'intendedNonMcgillLocation_select',
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
                    name: 'researchAndMethodology',
                    select_name: 'researchAndMethodology_select',
                    rows: 5,
                    style_select: {
                        width: "360px",
                        textAlign: "center",
                        marginBottom: 20
                    },
                    style_text: {
                        width: "630px"
                    },

                    grid_size: 12,
                    validation: ["required"]
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
                    name: 'projectConception',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6,
                    validation: ["required","validateDate"],
                }
            },
            project_designed: {
                elementType: 'input',
                elementConfig: {
                    label: 'Project designed',
                    name: 'projectDesigned',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6,
                    validation: ["required","validateDate"],
                }
            },
            funding_sought_ignored_considered: {
                elementType: 'input',
                elementConfig: {
                    label: 'Funding sought or ignored/considered',
                    name: 'fundingSoughtOrIgnoredConsidered',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6,
                    validation: ["required","validateDate"],
                }
            },
            ethics_approval: {
                elementType: 'input',
                elementConfig: {
                    label: 'Ethics approval',
                    name: 'ethicsApproval',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6,
                    validation: ["required","validateDate"],
                }
            },
            Recruitment: {
                elementType: 'input',
                elementConfig: {
                    label: 'Recruitment',
                    name: 'recruitment',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6,
                    validation: ["required","validateDate"],
                }
            },
            data_collection: {
                elementType: 'input',
                elementConfig: {
                    label: 'Data collection',
                    name: 'dataCollection',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6,
                    validation: ["required","validateDate"],
                }
            },
            data_analysis: {
                elementType: 'input',
                elementConfig: {
                    label: 'Data analysis',
                    name: 'dataAnalysis',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6,
                    validation: ["required","validateDate"]
                }
            },
            knowledge_translation_dissemination: {
                elementType: 'input',
                elementConfig: {
                    label: 'Knowledge translation/dissemination',
                    name: 'knowledgeTranslationDissemination',
                    style: {
                        width: 350,
                        marginBottom: 20
                    },
                    grid_size: 6,
                    validation: ["required","validateDate"]
                }
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