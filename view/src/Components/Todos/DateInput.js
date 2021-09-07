import 'date-fns'
import React, { useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'


const DateInput = ({ label, id, date = null, disabled=false }) => {
    const [selectedDate, setSelectedDate] = useState(
        date ? new Date(date) : null)

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                disabled={disabled}
                showTodayButton={!disabled}
                variant="inline"
                format="yyyy/MM/dd"
                margin="normal"
                id={id}
                label={label}
                value={selectedDate}
                onChange={handleDateChange}
                defaultValue={date || ''}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />

        </MuiPickersUtilsProvider>
    )
}

export default DateInput