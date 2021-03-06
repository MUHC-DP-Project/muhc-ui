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
                    name: 'official_project_title',
                    style: {
                        width: 350
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
            brief_project_title: {
                elementType: 'input',
                elementConfig: {
                    label: 'Brief project title',
                    name: 'brief_project_title',
                    style: {
                        width: 350
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
                    name: "Start_date_project"
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
                    name: "End_date_project"
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
                    name: 'Project_description',
                    placeholder: 'Max 250 words',
                    rows: 7,
                    multiline: true,
                    style: {
                        width: 820
                    },
                    grid_size: 12
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
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
                    grid_size: 12
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
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
                        name: "scientific_peer_review",
                        inputProps: {
                            name: "inputProps_scientific_peer_review",
                            id: uuidv4()
                        }
                    },
                    text_elem: {
                        name: "peer_review_text_field",
                        options: [
                            {
                                condition: "Yes",
                                placeholder: "Name of the reviewer"
                            }, {
                                condition: "No",
                                placeholder: "Would you like support from the PBRN"
                            }
                        ],
                        style: {
                            width: 370
                        }
                    }
                },

                validation: {},
                valid: true
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
                        name: "study_received_irb_reb",
                        inputProps: {
                            name: "inputProps_study_received_irb_reb",
                            id: uuidv4()
                        }
                    },
                    text_elem: {
                        name: "study_received_irb_reb_text_field",
                        options: [
                            {
                                condition: "Yes",
                                placeholder: "Name of the approving committee"
                            }, {
                                condition: "No",
                                placeholder: "What support, if any would you like from PBRN"
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
