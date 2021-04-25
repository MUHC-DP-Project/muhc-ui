export const formObject = {
    forgotPasswordForm: {
        email: {
            elementType: 'input',
            elementConfig: {
                label: 'Email Address',
                name: 'email',
                style: {
                    width: '400px'
                },
                grid_size: 12,
                validation: ["required", "validateEmail"]
            }
        }
    },
    formName: 'forgotPassword'
}