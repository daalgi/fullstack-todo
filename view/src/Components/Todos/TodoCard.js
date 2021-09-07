import React from 'react'

import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { makeStyles } from '@material-ui/core/styles'

import PriorityRadioButtons from './PriorityRadioButtons'
import DoneSwitch from './DoneSwitch'


const useStyles = makeStyles(theme => ({
    card: {
        //display: "flex",
        //flexDirection: "column",
        //justifyContent: "space-between",
        //height: "18vw",
        //width: "30vw",
        //height: "auto",
        //minHeight: "185px",
        minWidth: "300px",
        maxWidth: "600px",
        margin: "8px auto",
        //background: "hsl(0, 0%, 28%)",
        border: "solid",
        borderRadius: "3px",
        borderWidth: "1px",
        borderColor: "hsl(0, 0%, 13%)",
        boxShadow: "0px 0px 3px 3px hsl(0, 0%, 25%)",
        margin: "8px",
        padding: "13px",
        transition: "all 0.5s",
        "&:hover": {
            //borderWidth: "88px",
            //borderColor: "hsl(90, 0%, 32%)",
            background: "hsl(0, 0%, 23%)",
        }
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "8px"
    },
    headerButtons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "end"
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        //height: "10vh"
    },
    leftPane: {
        paddingRight: "8px",
        marginRight: "16px",
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    tags: {
        marginTop: "24px"
    },
    chip: {
        display: "inline-block",
        //padding: "0 2px",
        //height: "25px",
        //minWidth: "48px",
        fontSize: "13px",
        lineHeight: "20px",
        //borderColor: "hsl(80, 20%, 30%)",
        background: "hsl(80, 10%, 35%)",
        padding: "0.3em 0.8em",
        margin: "0 0.3em 0.3em 0",
        borderRadius: "2em",
        //boxSizing: "border-box",
        textDecoration: "none",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 300,
        textAlign: "center",
        transition: "all 0.2s",
        /*"&:hover": {
            boxShadow: "0px 1px 0px 1px",
        }*/
    },
}))


const TodoCard = ({ _id, text, date, priority, tags, changeDone, editTodo, removeTodo }) => {
    const classes = useStyles()

    return (
        <div className={classes.card}>
            <div className={classes.header}>
                <Typography variant="caption" align="left">
                    Due: {date?.due || 'undefined'}
                </Typography>

                {date?.done &&
                    <Typography variant="caption" align="right">
                        Done: {date.done}
                    </Typography>
                }
                <div className={classes.headerButtons}>
                    <IconButton aria-label="edit" onClick={() => editTodo(_id)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() => removeTodo(_id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    <DoneSwitch
                        dateDone={date.done}
                        onChange={() => changeDone({ _id })}
                    />
                    {/*
                    <FormControlLabel
                        control={
                            <Switch
                                checked={date?.done ? true : false}
                                onChange={() => changeDone({ _id })}
                                name="done"
                                color="secondary"
                            />
                        }
                        label="Done"
                    />
                    */}
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.leftPane}>
                    <div>
                        <Typography variant="body1">{text}</Typography>
                    </div>
                    <div className={classes.tags}>
                        {tags.length > 0 && tags.map((tag, index) =>
                            <div key={index} className={classes.chip}>{tag}</div>
                        )}
                    </div>
                </div>

            </div>
        </div >
    )
}


export default TodoCard