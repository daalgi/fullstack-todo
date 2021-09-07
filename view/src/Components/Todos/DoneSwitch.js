import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'


const DoneSwitch = ({ dateDone, onChange }) =>
    <FormControlLabel
        control={
            <Switch
                checked={dateDone ? true : false}
                onChange={onChange}
                name="done"
                color="secondary"
            />
        }
        label="Done"
    />

export default DoneSwitch