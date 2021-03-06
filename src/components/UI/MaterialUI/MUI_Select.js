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
    select_style,
    menu_list,
    ...custom
}) {
    return (
        
        <FormControl style={select_style} error={touched && error} variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select            
                {...input}
                {...custom}
                >
                {menu_list.map(item => {
                    {console.log(item)}
                    return item.value.charAt(0) === "*"
                        ? <ListSubheader key={item.id}>{item.value.slice(1)}</ListSubheader>
                        : <MenuItem key={item.id} value={item.value}>{item.value}</MenuItem>
                })}
            </Select>
        </FormControl>
    )
}

export default MUI_Select
