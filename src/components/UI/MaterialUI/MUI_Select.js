import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
function MUI_Select({
    input,
    label,
    meta: {
        touched,
        error
    },
    menu_list,
    ...custom
}) {
    return (
        <FormControl error={touched && error} variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select            
                {...input}
                {...custom}
                >
                {menu_list.map(item => {
                    return item.charAt(0) === "*"
                        ? <ListSubheader key={label+item}>{item.slice(1)}</ListSubheader>
                        : <MenuItem key={label+item} value={item}>{item}</MenuItem>
                })}
            </Select>
            {/* {renderFromHelper({touched, error})} */}
        </FormControl>
    )
}

export default MUI_Select
