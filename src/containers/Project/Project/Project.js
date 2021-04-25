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
            },keywords_title: {
                elementType: "title",
                elementConfig: {
                    value: "Keywords (select as many as applied)",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            keywords: {
                elementType: 'autocomplete_table',
                elementConfig: {
                    options: [                       
                             "Access to care",
                             "Allergy/immunology",
                             "Ambulatory medicine",
                             "Asthma",
                             "Behavioral/PsyChosocial",
                             "Biostatistics",
                             "Bioterrorism",
                             "Cancer",
                             "Cardiology",
                             "Chronic Disease/Pain",
                             "Clinical Trials",
                             "Community-Oriented primary care",
                             "Complementary/alternative medicine",
                             "Complexity science",
                             "Continuity of Care",
                             "Cross cultural medicine",
                             "Depression",
                             "Dermathology",
                             "Diabetes",
                             "Domestic Violence",
                             "Education/Training",
                             "Electronic Medical Records",
                             "Emergency Medicine",
                             "Endocrinology",
                             "Epidemiology",
                             "Ethics",
                             "Evidence-based Medicine",
                             "Faculty Development",
                             "Gastroenterology",
                             "Gay/Lesbian Medicine",
                             "Genetics",
                             "Geographic Information Systems",
                             "Geriatrics",
                             "Headaches",
                             "Health Care Delivery/Health Services Research",
                             "Health Care Disparities",
                             "Health Care Economics",
                             "Health Policy",
                             "Health Promotion/Disease Prevention",
                             "Health Work Force",
                             "Hematology/Oncology",
                             "Home Health Care",
                             "Hypertension",
                             "Infectious Diseases",
                             "Information Technology",
                             "Interdisciplinary Management",
                             "International Collaborations",
                             "Legal Issues",
                             "Literacy",
                             "Managed Care",
                             "Medical Decision Making",
                             "Medical Error",
                             "Medical Informatics",
                             "Men's Health Issues",
                             "Nephrology",
                             "Neurology",
                             "Nutrition",
                             "Obesity",
                             "Obstetrics",
                             "Office/Practice Management",
                             "Orthopedics",
                             "Outcomes Research",
                             "Palliative/End-of-life Care",
                             "Participatory Research",
                             "Patient-centered Medicine",
                             "Patient Education/Adherence",
                             "Patient-Physician Communication",
                             "Patient Safety",
                             "Pediatric/Adolecent Medicine",
                             "Personal Digital Assistants",
                             "Pharmacist Intervention",
                             "Physician Well-being",
                             "Polypharmacy",
                             "Practice-based Research/Practice Network Research",
                             "Psychiatry",
                             "Public Health",
                             "Pulmonary",
                             "Qualitative Research",
                             "Quality Improvement",
                             "Quality Care",
                             "Quality of Life",
                             "Randomized Controlled Trials",
                             "Research Methods",
                             "Rheumatology",
                             "Rural Health Care",
                             "Secondary Analysis",
                             "Severity of Illeness",
                             "Smoking Cessation",
                             "Spirituality",
                             "Sports Medicine",
                             "Statistical Methodology",
                             "Substance Abuse",
                             "Surgery",
                             "Vertigo/Dizziness",
                             "Vulnerable Population",
                             "Women's Health Issues/Gynecology",                                        
                    ],
                    autocomplete_table_name: "keywords",
                    text_field_name: 'keywords_text_field',
                    required:true,
                    grid_size: 12
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
                            },
                            {
                                value: "Exempt",
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