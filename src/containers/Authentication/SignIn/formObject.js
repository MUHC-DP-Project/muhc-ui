export const formObject = {
    signInForm: {
        email: {
            elementType: 'input',
            elementConfig: {
                label: 'Email Address',
                name: 'email',
                style: {
                    marginTop: '15px'
                },
                fullWidth: true,
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
                    marginTop: '15px'
                },
                fullWidth: true,
                type: "password",
                grid_size: 12,
                validation: ["required"]
            }
        }
    },
    formName: 'signIn'
};