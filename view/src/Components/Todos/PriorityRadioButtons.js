import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { PRIORITY_VALUES } from './config'


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


const PriorityRadioButtons = ({ _id, priority, changePriority }) => {
    const classes = useStyles()

    return (
        <>
            <p>Priority</p>
            <div className={classes.priorityRadioToolbar}>
                {PRIORITY_VALUES.map((p, index) =>
                    <label key={index} className={classes.priorityButton}>
                        <input
                            type="radio"
                            name={"todo-" + String(_id) + "-priority"}
                            id={"todo-" + String(_id) + "-priority-" + String(p)}
                            value={p}
                            checked={priority == p}
                            onChange={() => changePriority(_id, p)} // TODO
                        />
                        <span>{p}</span>
                    </label>
                )}
            </div>
        </>
    )
}


export default PriorityRadioButtons