import React from 'react'
import TextField from '@material-ui/core/TextField';

function MUI_TextField({
    label,
    input,
    meta: {
        touched,
        invalid,
        error
    },
    ...custom
}) {
    return (<TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
        variant="outlined"

        />)
}

export default React.memo(MUI_TextField);
