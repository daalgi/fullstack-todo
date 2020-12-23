import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import TodoList from './TodoList'
import Menu from './Menu'
import { todayFormattedDate, filterAndSortTodos, countTodos } from './utils'
import { apiTodos } from './config'


const useStyles = makeStyles(theme => ({
    pageContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0",
        marginTop: "16px"
    },
    grid: {
        maxWidth: "1600px",
        margin: "auto",
        [theme.breakpoints.up("sm")]: {
            display: "grid",
            //gridTemplateColumns: "repeat(4fr, auto-fill)",
            gridTemplateColumns: "600px 180px",
            gridGap: "20px",
            //gridTemplateRows: "auto 1fr auto",
            alignItems: "start"
        },
        [theme.breakpoints.down("sm")]: {
            display: "grid",
            gridTemplateColumns: "auto-fill 180px",
            gridGap: "20px",
            alignItems: "start"
        },
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }
    },
}))

const DEFAULT_TODO = {
    _id: 0,
    user: "",
    text: "",
    date: { created: null, due: null, done: null },
    priority: 2,
    tags: []
}

const TodoLayout = () => {
    const [currentTodo, setCurrentTodo] = useState(DEFAULT_TODO)
    const [todos, setTodos] = useState([])
    const [filters, setFilters] = useState({
        done: true,
        notDone: true,
        dateDueUndefined: false,
        dateCreated: null,
        dateDue: null,        
        dateDone: null,
        priority: null,
        text: null
    })
    const [counter, setCounter] = useState({
        notDone: {
            all: 0,
            dueToday: 0,
            dueThisWeek: 0,
            dueThisMonth: 0,
            dueUndefined: 0,
        },
        all: {
            all: 0,
            dueToday: 0,
            dueThisWeek: 0,
            dueThisMonth: 0,
            dueUndefined: 0,
        },
    })
    const classes = useStyles()

    useEffect(() => {
        console.log('useEffect []')
        let newTodos = apiTodos
        setTodos(newTodos)
        setCounter(countTodos(newTodos))
    }, [])

    useEffect(() => {
        if (todos.length) {
            console.log('useEffect [todos]')
            setCounter(countTodos(todos))
        }        
    }, [todos])

    const handleSelectCurrentTodo = _id =>
        setCurrentTodo(todos.find(t => t._id === _id))

    const handleNewTodo = todo => 
        setTodos([ todo, ...todos ])

    const handleRemoveTodo = _id => 
        setTodos(todos.filter(t => t._id !== _id))

    const handleSubmitEditTodo = todo => 
        setTodos(todos.map(t => t._id == todo._id ? todo : t))

    const handleChangePriority = ({ _id, priority }) =>
        setTodos(todos.map(todo =>
            todo._id === _id ? { ...todo, priority } : todo
        ))

    const handleTodoDone = ({ _id }) =>
        setTodos(todos.map(todo =>
            todo._id === _id
                ? {
                    ...todo,
                    date: {
                        ...todo.date,
                        done: !todo.date.done ? todayFormattedDate() : null
                    }
                }
                : todo
        ))
    //console.log(todos)
    //console.log(filters)
    //console.log(counter)
    return (
        <section className={classes.pageContainer}>
            <div className={classes.grid}>
                <TodoList
                    todos={filterAndSortTodos({ todos, filters })}
                    changeDone={handleTodoDone}
                    changePriority={handleChangePriority}
                />
                <Menu 
                    filters={filters}
                    setFilters={setFilters}
                    counter={counter}
                />
            </div>
        </section>
    )
}

export default TodoLayout