import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';

function Research_and_interest() {
    const json_obj = {
        research_and_interest_form: {
            professional_occupation_title:{
                elementType:"title",
                elementConfig:{
                    value:"Professional occupation",
                    style: {marginTop:20},
                    grid_size: 12
                }
            },
            professional_occupation: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem:{
                        options: [
                            "Allied Health professional",
                            "Administrative staff",
                            "Technical staff",
                            "Doctor(resident or physician)",
                            "Nurse",                                                  
                            "Manager",
                            "Other"
                        ],
                    style: {width:"320px",textAlign:"center"},
                    label:"Options",
                    name:"professional_occupation_select",
                    inputProps:{
                        name: "inputProps_professional_occupation",
                        id: uuidv4()
                    }
                    },
                    text_elem: {
                        name: "professional_occupation_text_field",
                        options: [  
                            {
                                condition: null,
                                placeholder:null
                            },          
                            {
                                condition: 'Other',
                                placeholder:'Other occupation'
                            }
                        ],
                        style: {width:"400px",textAlign:"center"},
                    },                                  
                    grid_size: 12,
                    
                },
                validation: {},
                valid: true,                            
            },
            work_status_title:{
                elementType:"title",
                elementConfig:{
                    value:"Work status",
                    style: {marginTop:20},
                    grid_size: 12
                }
            },
            work_status: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem:{
                        options: [
                            "Full-time",
                            "Part-time"
                        ],
                    style: {width:"320px",textAlign:"center"},
                    label:"Options",
                    name:"work_status_select",
                    inputProps:{
                        name: "inputProps_work_status",
                        id: uuidv4()
                    }
                    },                                  
                    grid_size: 12,
                    
                },
                validation: {},
                valid: true,                            
            },

            role_title:{
                elementType:"title",
                elementConfig:{
                    value:"Role",
                    style: {marginTop:20},
                    grid_size: 12
                }
            },
            role: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem:{
                        options: [
                            '*Doctor',
                            'Staff Physician',
                            'Staff Physician',
                            '*Trainee',
                            'Resident R1',   
                            'Resident R2',
                            'Nursing student in stage/placement',
                            'Allied Health student in stage/placement',                        
                            '*Nurse',
                            'Registered Nurse (RN)',
                            'Nursing Assistant/Auxiliary Nurse',
                            'Nurse Practitioner',
                            'Assistant Head Nurse',
                            'Clinical Nurse Specialist',
                            'Nurse Practitioner',
                            'Clinical Nurse Consultant',
                            'Clinical Nurse Specialist',
                            'Nurse-Researcher',
                            '*Allied Health Professional',
                            'Dietician',
                            'Physical Therapist',
                            'Occupational Therapist',
                            'Social Worker',
                            'Speech language pathologist',
                            'Psychologist',
                            'Other',
                        ],
                    style: {width:"320px",textAlign:"center"},
                    label:"Options",
                    name:"role_select",
                    inputProps:{
                        name: "inputProps_role",
                        id: uuidv4()
                    }
                    },
                    text_elem: {
                        name: "role_text_field",
                        options: [  
                            {
                                condition: null,
                                placeholder:null
                            },          
                            {
                                condition: 'Other',
                                placeholder:'Other role'
                            }
                        ],
                        style: {width:"400px",textAlign:"center"},
                    },                                  
                    grid_size: 12,
                    
                },
                validation: {},
                valid: true,                            
            },
                   
            research_interests_title:{
                elementType:"title",
                elementConfig:{
                    value:"Research interests",
                    style: {marginTop:20},
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
                      autocomplete_table_name:"research_interests_autocomplete_table",
                      text_field_name:'research_interests_text_field',
                    grid_size: 12
                },
                value: [],
                validation: {},
                valid: true,               
            }
        },
        formName: 'signUp'
    }
    return (
        <React.Fragment>
           <SimpleMultipageForm json_obj={json_obj.research_and_interest_form} formName={json_obj.formName}/> 
        </React.Fragment>
    )
}

export default Research_and_interest
