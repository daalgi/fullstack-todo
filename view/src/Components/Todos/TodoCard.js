import React from 'react'

import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { makeStyles } from '@material-ui/core/styles'

import PriorityRadioButtons from './PriorityRadioButtons'


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
    rightPane: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "start"
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


const TodoCard = ({ _id, text, date, priority, tags, 
    changeDone, changePriority }) => {
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
            </div>
            <div className={classes.content}>
                <div className={classes.leftPane}>
                    <div>
                        <Typography variant="body1">{text}</Typography>
                    </div>
                    <div className={classes.tags}>
                        {tags?.length && tags.map((tag, index) =>
                            <div key={index} className={classes.chip}>{tag}</div>
                        )}
                    </div>
                </div>
                <div className={classes.rightPane}>
                    {/*<PriorityRadioButtons 
                        _id={_id} 
                        priority={priority}
                        changePriority={changePriority}
                    />
                    <br />*/}
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
                </div>
            </div>
        </div >
    )
}


export default TodoCard