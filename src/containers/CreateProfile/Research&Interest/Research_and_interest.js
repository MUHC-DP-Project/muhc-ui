import React from 'react';
import {v4 as uuidv4} from 'uuid';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';

function Research_and_interest() {
    const json_obj = {
        research_and_interest_form: {
            professional_occupation_title: {
                elementType: "title",
                elementConfig: {
                    value: "Professional category",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            professional_occupation: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: "Allied Health professional",
                                id: uuidv4()
                            }, {
                                value: "Administrative staff",
                                id: uuidv4()
                            }, {
                                value: "Technical staff",
                                id: uuidv4()
                            }, {
                                value: "Doctor(resident or physician)",
                                id: uuidv4()
                            }, {
                                value: "Nurse",
                                id: uuidv4()
                            }, {
                                value: "Manager",
                                id: uuidv4()
                            }, {
                                value: "Other",
                                id: uuidv4()
                            }
                        ],
                        style: {
                            width: "320px",
                            textAlign: "center"
                        },
                        label: "Options",
                        name: "professionalOccupationSelect",
                        inputProps: {
                            name: "inputProps_professional_occupation",
                            id: uuidv4()
                        },
                        validation: ["required"],
                    },
                    text_elem: {
                        name: "professionalOccupationTextfield",
                        options: [
                            {
                                condition: null,
                                placeholder: null,
                                validation: [],
                            }, {
                                condition: 'Other',
                                placeholder: 'Other occupation',
                                validation: ["required"],
                            }
                        ],
                        style: {
                            width: "400px",
                            textAlign: "center"
                        }
                    },
                    grid_size: 12
                }
            },
            work_status_title: {
                elementType: "title",
                elementConfig: {
                    value: "Work status",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            work_status: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: "Full-time",
                                id: uuidv4()
                            }, {
                                value: "Part-time",
                                id: uuidv4()
                            }
                        ],
                        style: {
                            width: "320px",
                            textAlign: "center"
                        },
                        label: "Options",
                        name: "workStatus",
                        inputProps: {
                            name: "inputProps_work_status",
                            id: uuidv4()
                        },
                        validation: ["required"],
                    },
                    grid_size: 12
                }
            },

            role_title: {
                elementType: "title",
                elementConfig: {
                    value: "Current clinic role",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            role: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: '*Doctor',
                                id: uuidv4()
                            }, {
                                value: 'Staff Physician',
                                id: uuidv4()
                            }, {
                                value: 'Non-Staff Physician',
                                id: uuidv4()
                            }, {
                                value: '*Trainee',
                                id: uuidv4()
                            }, {
                                value: 'Resident R1',
                                id: uuidv4()
                            }, {
                                value: 'Resident R2',
                                id: uuidv4()
                            }, {
                                value: 'Nursing student in stage/placement',
                                id: uuidv4()
                            }, {
                                value: 'Allied Health student in stage/placement',
                                id: uuidv4()
                            }, {
                                value: '*Nurse',
                                id: uuidv4()
                            }, {
                                value: 'Registered Nurse (RN)',
                                id: uuidv4()
                            }, {
                                value: 'Nursing Assistant/Auxiliary Nurse',
                                id: uuidv4()
                            }, {
                                value: 'Nurse Practitioner',
                                id: uuidv4()
                            }, {
                                value: 'Assistant Head Nurse',
                                id: uuidv4()
                            }, {
                                value: 'Clinical Nurse Specialist',
                                id: uuidv4()
                            }, {
                                value: 'Nurse Practitioner',
                                id: uuidv4()
                            }, {
                                value: 'Clinical Nurse Consultant',
                                id: uuidv4()
                            }, {
                                value: 'Clinical Nurse Specialist',
                                id: uuidv4()
                            }, {
                                value: 'Nurse-Researcher',
                                id: uuidv4()
                            }, {
                                value: '*Allied Health Professional',
                                id: uuidv4()
                            }, {
                                value: 'Dietician',
                                id: uuidv4()
                            }, {
                                value: 'Physical Therapist',
                                id: uuidv4()
                            }, {
                                value: 'Occupational Therapist',
                                id: uuidv4()
                            }, {
                                value: 'Social Worker',
                                id: uuidv4()
                            }, {
                                value: 'Speech language pathologist',
                                id: uuidv4()
                            }, {
                                value: 'Psychologist',
                                id: uuidv4()
                            }, {
                                value: 'Other',
                                id: uuidv4()
                            }
                        ],
                        style: {
                            width: "320px",
                            textAlign: "center"
                        },
                        label: "Options",
                        name: "roleSelect",
                        inputProps: {
                            name: "inputProps_role",
                            id: uuidv4()
                        },
                        validation: ["required"],
                    },
                    text_elem: {
                        name: "roleTextfield",
                        options: [
                            {
                                condition: null,
                                placeholder: null,
                                validation: []
                            }, {
                                condition: 'Other',
                                placeholder: 'Other role',
                                validation: ["required"]
                            }
                        ],
                        style: {
                            width: "400px",
                            textAlign: "center"
                        },
                        validation: ["required"],
                    },
                    grid_size: 12
                }
            },

            research_interests_title: {
                elementType: "title",
                elementConfig: {
                    value: "Research interests (select as many as applied)",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            research_interests: {
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
                    autocomplete_table_name: "researchInterests",
                    text_field_name: 'research_interests_text_field',
                    grid_size: 12
                }
            }
        },
        formName: 'createProfile'
    }
    return (
        <React.Fragment>
            <SimpleMultipageForm
                json_obj={json_obj.research_and_interest_form}
                formName={json_obj.formName}/>
        </React.Fragment>
    )
}

export default Research_and_interest
