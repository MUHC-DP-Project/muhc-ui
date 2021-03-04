import React from 'react'
import FormHelperText from '@material-ui/core/FormHelperText'

function MUI_FormHelperText({ touched, error }) {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}

export default MUI_FormHelperText
