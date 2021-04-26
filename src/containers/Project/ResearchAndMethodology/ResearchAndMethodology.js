import React from 'react';
import {v4 as uuidv4} from 'uuid';
import InputMapper from '../../../components/UI/InputMapper/InputMapper';
function Research_and_methodology() {
    const formObject = {
        researchMethodologyForm: {
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
                    displayselectedItem:true,
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
            project_conception_title: {
                elementType: "title",
                elementConfig: {
                    value: "Project Conception",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            project_conception_date: {
                elementType: "calendar",
                elementConfig: {
                    style: {
                        width: 300,
                        marginTop:0
                    },
                    label: "Estimated Date",
                    grid_size: 5,

                    name: "projectConceptionDate",
                    validation: ["required"],
                }
            },
            project_conception_radio: {
                elementType: 'radio',
                elementConfig: {
                    radio_label: 'Project Stage',
                    name: 'projectConceptionRadio',
                    options:["Not yet started","In-progress","Completed"],
                    grid_size: 6,
                    validation: ["required"],
                }
            },project_designed_title: {
                elementType: "title",
                elementConfig: {
                    value: "Project designed",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            project_designed_date: {
                elementType: "calendar",
                elementConfig: {
                    style: {
                        width: 300,
                        marginTop:0
                    },
                    label: "Estimated Date",
                    grid_size: 5,

                    name: "projectDesignedDate",
                    validation: ["required"],
                }
            },
            project_designed_radio: {
                elementType: 'radio',
                elementConfig: {
                    radio_label: 'Project Stage',
                    name: 'projectDesignedRadio',
                    options:["Not yet started","In-progress","Completed"],
                    grid_size: 6,
                    validation: ["required"],
                }
            },funding_sought_ignored_considered_title: {
                elementType: "title",
                elementConfig: {
                    value: "Funding sought or ignored/considered",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            funding_sought_ignored_considered_date: {
                elementType: "calendar",
                elementConfig: {
                    style: {
                        width: 300,
                        marginTop:0
                    },
                    label: "Estimated Date",
                    grid_size: 5,

                    name: "fundingSoughtIgnoredConsideredDate",
                    validation: ["required"],
                }
            },
            funding_sought_ignored_considered_radio: {
                elementType: 'radio',
                elementConfig: {
                    radio_label: 'Project Stage',
                    name: 'fundingSoughtIgnoredConsideredRadio',
                    options:["Not yet started","In-progress","Completed"],
                    grid_size: 6,
                    validation: ["required"],
                }
            },ethics_approval_title: {
                elementType: "title",
                elementConfig: {
                    value: "Ethics Approval",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            ethics_approval_date: {
                elementType: "calendar",
                elementConfig: {
                    style: {
                        width: 300,
                        marginTop:0
                    },
                    label: "Estimated Date",
                    grid_size: 5,

                    name: "ethicsApprovalDate",
                    validation: ["required"],
                }
            },
            ethics_approval_radio: {
                elementType: 'radio',
                elementConfig: {
                    radio_label: 'Project Stage',
                    name: 'ethicsApprovalRadio',
                    options:["Not yet started","In-progress","Completed"],
                    grid_size: 6,
                    validation: ["required"],
                }
            },recruitment_title: {
                elementType: "title",
                elementConfig: {
                    value: "Recruitment",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            recruitment_date: {
                elementType: "calendar",
                elementConfig: {
                    style: {
                        width: 300,
                        marginTop:0
                    },
                    label: "Estimated Date",
                    grid_size: 5,

                    name: "recruitmentDate",
                    validation: ["required"],
                }
            },
            recruitment_radio: {
                elementType: 'radio',
                elementConfig: {
                    radio_label: 'Project Stage',
                    name: 'recruitmentRadio',
                    options:["Not yet started","In-progress","Completed"],
                    grid_size: 6,
                    validation: ["required"],
                }
            },data_collection_title: {
                elementType: "title",
                elementConfig: {
                    value: "Data Collection",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            data_collection_date: {
                elementType: "calendar",
                elementConfig: {
                    style: {
                        width: 300,
                        marginTop:0
                    },
                    label: "Estimated Date",
                    grid_size: 5,

                    name: "dataCollectionDate",
                    validation: ["required"],
                }
            },
            data_collection_radio: {
                elementType: 'radio',
                elementConfig: {
                    radio_label: 'Project Stage',
                    name: 'dataCollectionRadio',
                    options:["Not yet started","In-progress","Completed"],
                    grid_size: 6,
                    validation: ["required"],
                }
            },data_analysis_title: {
                elementType: "title",
                elementConfig: {
                    value: "Data Analysis",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            data_analysis_date: {
                elementType: "calendar",
                elementConfig: {
                    style: {
                        width: 300,
                        marginTop:0
                    },
                    label: "Estimated Date",
                    grid_size: 5,

                    name: "dataAnalysisDate",
                    validation: ["required"],
                }
            },
            data_analysis_radio: {
                elementType: 'radio',
                elementConfig: {
                    radio_label: 'Project Stage',
                    name: 'dataAnalysisRadio',
                    options:["Not yet started","In-progress","Completed"],
                    grid_size: 6,
                    validation: ["required"],
                }
            },knowledge_translation_dissemination_title: {
                elementType: "title",
                elementConfig: {
                    value: "Knowledge translation/dissemination",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            knowledge_translation_dissemination_date: {
                elementType: "calendar",
                elementConfig: {
                    style: {
                        width: 300,
                        marginTop:0
                    },
                    label: "Estimated Date",
                    grid_size: 5,

                    name: "knowledgeTranslationDisseminationDate",
                    validation: ["required"],
                }
            },
            knowledge_translation_dissemination_radio: {
                elementType: 'radio',
                elementConfig: {
                    radio_label: 'Project Stage',
                    name: 'knowledgeTranslationDisseminationRadio',
                    options:["Not yet started","In-progress","Completed"],
                    grid_size: 6,
                    validation: ["required"],
                }
            }
        },
        formName: 'createProject'
    }

    return (
        <React.Fragment>
            <InputMapper
                formObject={formObject.researchMethodologyForm}
                formName={formObject.formName}/>
        </React.Fragment>
    )
}

export default Research_and_methodology