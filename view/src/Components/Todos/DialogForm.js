import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'

import PriorityRadioButtons from './PriorityRadioButtons'
import DateInput from './DateInput'

import { todayFormattedDate } from './utils'


const useStyles = makeStyles(theme => ({
    content: {
        display: "flex",
        flexDirection: "row",
        alignItems: "space-between",
        minWidth: "320px"
    },
    leftPane: {
        padding: "8px",
        minWidth: "300px"
    },
    rightPane: {
        padding: "8px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        margin: "0",
        marginTop: "16px"
    },
}))


const DialogForm = ({ open, currentTodo, handleTodoFormClose }) => {
    const classes = useStyles()

    const handleSubmit = e => {
        e.preventDefault()
        console.log('handleSubmit()------------------>')
        //console.log(typeof e.target.elements.due.value)
        const todo = {
            _id: currentTodo._id,
            text: e.target.elements.todoText.value,
            priority: e.target.elements.priority.value,
            date: {
                created: currentTodo.date.created || todayFormattedDate(),
                due: e.target.elements.due.value || null,
                done: e.target.elements.done.value || null
            },
            tags: currentTodo.tags || []
        }
        console.log(todo.date)
        handleTodoFormClose({ save: true, todo })
    }

    return (
        <Dialog
            open={open}
            onClose={handleTodoFormClose}
            aria-labelledby="dialog-title"
        >
            <DialogTitle>{currentTodo._id ? 'Edit Todo' : 'New Todo'}</DialogTitle>
            <form onSubmit={handleSubmit}>
                <div className={classes.content}>

                    <div className={classes.leftPane}>
                        <TextField
                            id="todoText" label="text" variant="outlined" multiline rows={10}
                            fullWidth
                            defaultValue={currentTodo?.text}
                        />
                    </div>

                    <div className={classes.rightPane}>
                        <PriorityRadioButtons
                            id="priority"
                            priority={currentTodo.priority}
                        />
                        {/*<DoneSwitch
                        dateDone={currentTodo.date.done}
                        onChange={null}
                        />*/}
                        <DateInput 
                            disabled={true} id="created" label="Created" 
                            date={currentTodo.date?.created || todayFormattedDate()} />
                        <DateInput 
                            id="due" label="Due" date={currentTodo.date?.due} />
                        <DateInput 
                            id="done" label="Done" date={currentTodo.date?.done} />

                    </div>

                </div>
                <DialogActions>
                    <Button onClick={() => handleTodoFormClose({ save: false })} color="secondary">
                        Cancel
                </Button>
                    <Button autoFocus type="submit" color="secondary">
                        Save
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default DialogForm