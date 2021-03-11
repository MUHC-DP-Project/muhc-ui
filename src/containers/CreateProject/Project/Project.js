import React from 'react'
import {v4 as uuidv4} from 'uuid';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';

function Project() {
    const json_obj = {
        project_form: {
            project_section_title: {
                elementType: "title",
                elementConfig: {
                    value: "Project",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12

                }
            },
            official_project_title: {
                elementType: 'input',
                elementConfig: {
                    label: 'Official project title',
                    name: 'officialProjectTitle',
                    style: {
                        width: 350
                    },
                    grid_size: 6,
                    validation: ["required"],
                }
            },
            brief_project_title: {
                elementType: 'input',
                elementConfig: {
                    label: 'Brief project title',
                    name: 'briefProjectTitle',
                    style: {
                        width: 350
                    },
                    grid_size: 6,
                    validation: ["required"],
                }
            },
            project_date_title: {
                elementType: "title",
                elementConfig: {
                    value: "Project Dates",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12

                }
            },
            project_start_date: {
                elementType: "calendar",
                elementConfig: {
                    style: {
                        width: 300
                    },
                    label: "Start Date",
                    grid_size: 5,
                    name: "startDateProject",
                    validation: ["required"],
                }
            },
            project_end_date: {
                elementType: "calendar",
                elementConfig: {
                    style: {
                        width: 300
                    },
                    label: "End Date",
                    grid_size: 5,
                    name: "endDateProject",
                    validation: ["required"],
                }
            },
            project_description_title: {
                elementType: "title",
                elementConfig: {
                    value: "Project description",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            project_description: {
                elementType: 'input',
                elementConfig: {
                    label: 'Project Description',
                    name: 'projectDescription',
                    placeholder: 'Max 250 words',
                    rows: 7,
                    multiline: true,
                    style: {
                        width: 820
                    },
                    grid_size: 12,
                    validation: ["required"],
                }
            },
            funding_project_title: {
                elementType: "title",
                elementConfig: {
                    value: "Project Funds",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            funding_project: {
                elementType: "project_fund",
                elementConfig: {
                    style: {},
                    grid_size: 12,
                    validation: ["required"],
                },
            },
            peer_review_title: {
                elementType: "title",
                elementConfig: {
                    value: "Scientific peer-review",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            peer_review: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: "Yes",
                                id: uuidv4()
                            }, {
                                value: "No",
                                id:uuidv4()
                            }
                        ],
                        style: {
                            width: "240px",
                            textAlign: "center"
                        },
                        label: "Options",
                        name: "scientificPeerReviewSelect",
                        inputProps: {
                            name: "inputProps_scientific_peer_review",
                            id: uuidv4()
                        },
                        validation: ["required"],
                    },
                    text_elem: {
                        name: "scientificPeerReviewText",
                        options: [
                            {
                                condition: "Yes",
                                placeholder: "Name of the reviewer",
                                validation: ["required"],
                            }, {
                                condition: "No",
                                placeholder: "Would you like support from the PBRN",
                                validation: ["required"],
                            }
                        ],
                        style: {
                            width: 370
                        }
                    }
                }
            },
            irb_reb_approval_title: {
                elementType: "title",
                elementConfig: {
                    value: "Has this study received IRB/REB approval",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            irb_reb_approval: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: "Yes",
                                id: uuidv4()
                            }, {
                                value: "No",
                                id:uuidv4()
                            }
                        ],
                        style: {
                            width: "240px",
                            textAlign: "center"
                        },
                        label: "Options",
                        name: "studyIRBREBSelect",
                        inputProps: {
                            name: "inputProps_study_received_irb_reb",
                            id: uuidv4()
                        },
                        validation: ["required"],
                    },
                    text_elem: {
                        name: "studyIRBREBText",
                        options: [
                            {
                                condition: "Yes",
                                placeholder: "Name of the approving committee",
                                validation: ["required"],
                            }, {
                                condition: "No",
                                placeholder: "What support, if any would you like from PBRN",
                                validation: ["required"],
                            }
                        ],
                        style: {
                            width: 370
                        }
                    },
                    extra_text: "The PBRN can be contacted at pbrn.fammed@mcgill.ca"
                },

                validation: {},
                valid: true
            }

        },
        formName: 'createProject'
    }

    return (
        <React.Fragment>
            <SimpleMultipageForm
                json_obj={json_obj.project_form}
                formName={json_obj.formName}/>
        </React.Fragment>
    )
}

export default Project