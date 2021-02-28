import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel';

function MUI_RadioButton({
    label,
    radio_list,
    input,
    ...rest
}) {

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <RadioGroup {...input} {...rest} row={true}>
                {radio_list.map((item, index) =>< FormControlLabel key = {
                    item + index
                }
                value = {
                    item
                }
                control = { < Radio />
                }
                label = {
                    item
                } />)
}
            </RadioGroup>
        </FormControl>
    )
}

export default MUI_RadioButton
