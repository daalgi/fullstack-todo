import React, { useState } from 'react'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import { PRIORITY_VALUES } from './config'


const PriorityRadioButtons = priority => {
    const [value, setValue] = useState(priority)

    const handleChange = e => setValue(e.target.value)

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Priority</FormLabel>
            <RadioGroup
                aria-label="priority"
                name="priority"
                value={value}
                onChange={handleChange}>
                {PRIORITY_VALUES.map((p, index) =>
                    <FormControlLabel
                        key={index}
                        value={p}
                        control={<Radio />}
                        label={p[0].toUpperCase()+p.slice(1)} />
                )}
            </RadioGroup>
        </FormControl>
    )
}


export default PriorityRadioButtons
/*
const useStyles = makeStyles(theme => ({
    priorityRadioToolbar: {
        //margin: "10px",
        "& input[type='radio']": {
            //appearance: "none",
            opacity: 0,
            width: 0
        },
        "& label": {
            //display: "inline-block",
            padding: "8px",
            border: "1px solid",
            borderRadius: "4px"
        },
        "& label:hover": {
            background: "hsl(80, 90%, 30%)",
            cursor: "pointer"
        },
        "& input[type='radio']:focus + label": {
            background: "hsl(80, 90%, 20%)"
        },
        "& input[type='radio']:checked": {
            background: "hsl(80, 90%, 20%)"
        },
    },

}))
*/

/*   <>
            <p>Priority</p>
            <div className={classes.priorityRadioToolbar}>
                {PRIORITY_VALUES.map((p, index) =>
                    <label key={index} className={classes.priorityButton}>
                        <input
                            type="radio"
                            name={"todo-priority"}
                            id={"todo-priority-" + String(p)}
                            value={p}
                            //checked={priority == p}
                            //onChange={() => changePriority(_id, p)} // TODO
                        />
                        <span>{p}</span>
                    </label>
                )}
            </div>
        </>
                */