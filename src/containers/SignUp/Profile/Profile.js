import React from 'react';
import SimpleMultipageForm from '../../../components/UI/SimpleMultipageForm/SimpleMultipageForm';
import {v4 as uuidv4} from 'uuid';
function Profile() {

    const json_obj = {
        profile_form: {
            about_me_title: {
                elementType: "title",
                elementConfig: {
                    value: "Salutation",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            salutation: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: "Mr",
                                id: uuidv4()
                            }, {
                                value: "Ms",
                                id: uuidv4()
                            }, {
                                value: "Mrs",
                                id: uuidv4()
                            }, {
                                value: "Dr.",
                                id: uuidv4()
                            }, {
                                value: "Prof.",
                                id: uuidv4()
                            }
                        ],
                        style: {
                            width: "120px",
                            textAlign: "center"
                        },
                        label: "Salutation",
                        name: "salutation",
                        inputProps: {
                            name: "inputProps_salutation",
                            id: uuidv4()
                        },
                        grid_size: 2

                    }
                },
                validation: {},
                valid: true
            },
            first_name: {
                elementType: 'input',
                elementConfig: {
                    label: 'First Name',
                    name: 'firstName',
                    style: {
                        width: 330,
                        marginBottom: 20
                    },
                    grid_size: 5
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            last_name: {
                elementType: 'input',
                elementConfig: {
                    label: 'Last Name',
                    name: 'lastName',
                    style: {
                        width: 330,
                        marginBottom: 20
                    },
                    grid_size: 5
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            credentials_title: {
                elementType: "title",
                elementConfig: {
                    value: "Credentials/Qualifications",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            credentials_qualifications: {
                elementType: 'input',
                elementConfig: {
                    label: 'Credentials/Qualifications',
                    name: 'credentialsQualifications',
                    style: {
                        width: 600,
                        marginBottom: 20
                    },
                    grid_size: 5
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            gender_title: {
                elementType: "title",
                elementConfig: {
                    value: "Gender",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            gender: {
                elementType: 'radio',
                elementConfig: {
                    options: [
                        'Male', 'Female', 'Other', 'Choose not to disclose'
                    ],
                    name: "gender",
                    radio_label: "",
                    grid_size: 12
                },
                validation: {},
                valid: true,
                form_label: "Gender"
            },
            communication_title: {
                elementType: "title",
                elementConfig: {
                    value: "Communication method",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            communication: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: 'Prefered Phone Number',
                                id: uuidv4()
                            }, {
                                value: 'Prefered Email Address',
                                id: uuidv4()
                            }, {
                                value: 'Alternative Email Address',
                                id: uuidv4()
                            }
                        ],
                        style: {
                            width: "320px",
                            textAlign: "center"
                        },
                        label: "Method of communication",
                        name: "communicationSelect",
                        inputProps: {
                            name: "inputProps_communication",
                            id: uuidv4()
                        }
                    },
                    text_elem: {
                        name: "communicationTextfield",
                        options: [
                            {
                                condition: 'Prefered Phone Number',
                                placeholder: '(xxx)-xxx-xxxx'
                            }, {
                                condition: 'Prefered Email Address',
                                placeholder: 'example@mail.mcgill.ca'
                            }, {
                                condition: 'Alternative Email Address',
                                placeholder: 'example@mail.mcgill.ca'
                            }
                        ],
                        style: {
                            width: 370
                        }
                    },
                    grid_size: 12
                },
                validation: {},
                valid: true
            },
            principal_university_affiliation_title: {
                elementType: "title",
                elementConfig: {
                    value: "Principal University Affiliation",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            principal_university_affiliation: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: 'McGill University',
                                id: uuidv4()
                            }, {
                                value: 'University de Laval',
                                id: uuidv4()
                            }, {
                                value: 'University de Montreal',
                                id: uuidv4()
                            }, {
                                value: 'University de Sherbrooke',
                                id: uuidv4()
                            }, {
                                value: 'Not applicable',
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
                        label: "University name",
                        name: "principalUniversityAffiliationSelect",
                        inputProps: {
                            name: "inputProps_principal_university_affiliation",
                            id: uuidv4()
                        }
                    },
                    text_elem: {
                        name: "principalUniversityAffiliationTextfield",
                        options: [
                            {
                                condition: null,
                                placeholder: null
                            }, {
                                condition: 'Other',
                                placeholder: 'Name'
                            }
                        ],
                        style: {
                            width: "400px",
                            textAlign: "center"
                        }
                    },
                    grid_size: 12
                },
                validation: {},
                valid: true
            },
            principal_clinic_title: {
                elementType: "title",
                elementConfig: {
                    value: "Principal Clinic",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            principal_clinic: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: 'Herzl Family Practice Centre',
                                id: uuidv4()
                            }, {
                                value: "St Mary's Family Medicine Centre",
                                id: uuidv4()
                            }, {
                                value: 'CLSC Côtes des Neiges',
                                id: uuidv4()
                            }, {
                                value: 'Gatineau U-FMG.',
                                id: uuidv4()
                            }, {
                                value: 'Jardins Roussillon U-FMG',
                                id: uuidv4()
                            }, {
                                value: "Vallée de l'Or U-FMG",
                                id: uuidv4()
                            }, {
                                value: 'CLSC Metro',
                                id: uuidv4()
                            }, {
                                value: 'Queen Elizabeth U-FMG',
                                id: uuidv4()
                            }, {
                                value: 'CLSC Parc-Extension',
                                id: uuidv4()
                            }, {
                                value: 'Santé Kildare GMF',
                                id: uuidv4()
                            }, {
                                value: 'Other McGill University',
                                id: uuidv4()
                            }, {
                                value: 'University de Laval',
                                id: uuidv4()
                            }, {
                                value: 'University de Montreal',
                                id: uuidv4()
                            }, {
                                value: 'University de Sherbrooke',
                                id: uuidv4()
                            }, {
                                value: 'Not applicable',
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
                        name: "principalClinicSelect",
                        inputProps: {
                            name: "inputProps_principal_clinic_select",
                            id: uuidv4()
                        }
                    },
                    text_elem: {
                        name: "principalClinicTextfield",
                        options: [
                            {
                                condition: null,
                                placeholder: null
                            }, {
                                condition: 'Other',
                                placeholder: 'Name'
                            }
                        ],
                        style: {
                            width: "400px",
                            textAlign: "center"
                        }
                    },
                    grid_size: 12
                },
                validation: {},
                valid: true
            },
            secondary_clinic_title: {
                elementType: "title",
                elementConfig: {
                    value: "Secondary Clinic",
                    style: {
                        marginTop: 20
                    },
                    grid_size: 12
                }
            },
            secondary_clinic: {
                elementType: 'select_text',
                elementConfig: {
                    select_elem: {
                        options: [
                            {
                                value: 'Herzl Family Practice Centre',
                                id: uuidv4()
                            }, {
                                value: "St Mary's Family Medicine Centre",
                                id: uuidv4()
                            }, {
                                value: 'CLSC Côtes des Neiges',
                                id: uuidv4()
                            }, {
                                value: 'Gatineau U-FMG.',
                                id: uuidv4()
                            }, {
                                value: 'Jardins Roussillon U-FMG',
                                id: uuidv4()
                            }, {
                                value: "Vallée de l'Or U-FMG",
                                id: uuidv4()
                            }, {
                                value: 'CLSC Metro',
                                id: uuidv4()
                            }, {
                                value: 'Queen Elizabeth U-FMG',
                                id: uuidv4()
                            }, {
                                value: 'CLSC Parc-Extension',
                                id: uuidv4()
                            }, {
                                value: 'Santé Kildare GMF',
                                id: uuidv4()
                            }, {
                                value: 'Other McGill University',
                                id: uuidv4()
                            }, {
                                value: 'University de Laval',
                                id: uuidv4()
                            }, {
                                value: 'University de Montreal',
                                id: uuidv4()
                            }, {
                                value: 'University de Sherbrooke',
                                id: uuidv4()
                            }, {
                                value: 'Not applicable',
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
                        name: "secondaryClinicSelect",
                        inputProps: {
                            name: "inputProps_secondary_clinic_select",
                            id: uuidv4()
                        }
                    },
                    text_elem: {
                        name: "secondaryClinicTextfield",
                        options: [
                            {
                                condition: null,
                                placeholder: null
                            }, {
                                condition: 'Other',
                                placeholder: 'Name'
                            }
                        ],
                        style: {
                            width: "400px",
                            textAlign: "center"
                        }
                    },
                    grid_size: 12
                },
                validation: {},
                valid: true
            }
        },
        formName: 'signUp'
    }
    return (
        <React.Fragment>
            <SimpleMultipageForm
                json_obj={json_obj.profile_form}
                formName={json_obj.formName}/>
        </React.Fragment>
    )
}

export default Profile
