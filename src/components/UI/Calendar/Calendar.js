import React from 'react';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  
function Calendar({ input: { onChange, value=new Date() }, label,style }) {

    return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}  >
        <KeyboardDatePicker
          style={style}
          margin="normal"
          variant="outlined"
          id="date-picker-dialog"
          label={label}
          format="MM/dd/yyyy"
          value={!value ? null : new Date(value)}
          onChange={onChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>
    )
}

export default Calendar;
