export const formObject = {
    signUpform: {
        first_name: {
            elementType: 'input',
            elementConfig: {
                label: 'First Name',
                name: 'firstName',
                style: {
                    width: 190
                },
                grid_size: 6,
                validation: ["required"]
            }
        },
        last_name: {
            elementType: 'input',
            elementConfig: {
                label: 'Last Name',
                name: 'lastName',
                style: {
                    width: 190
                },
                grid_size: 6,
                validation: ["required"]
            }
        },
        email: {
            elementType: 'input',
            elementConfig: {
                label: 'Email Address',
                name: 'email',
                style: {
                    width: 400
                },
                grid_size: 12,
                validation: ["required", "validateEmail"]
            }
        },
        password: {
            elementType: 'input',
            elementConfig: {
                label: 'Password',
                name: 'password',
                style: {
                    width: 400
                },
                // type: "password",
                grid_size: 12,
                validation: ["required"]
            }
        },
        verificationNote: {
            elementType: 'input',
            elementConfig: {
                label: 'Verification Note',
                name: 'verificationNotes',
                style: {
                    width: 400
                },
                multiline: true,
                rows: 3,
                rowsMax: 3,
                grid_size: 12,
                validation: ["required"]
            }
        }
    },
    formName: 'signUp'
}