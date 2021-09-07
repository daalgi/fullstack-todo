import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import TodoList from './TodoList'
import Menu from './Menu'
import DialogForm from './DialogForm'
import { todayFormattedDate, filterAndSortTodos, countTodos } from './utils'
import { apiTodos, DEFAULT_TODO } from './config'


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

const TodoLayout = () => {
    const [todoForm, setTodoForm] = useState({
        open: false,
        currentTodo: DEFAULT_TODO
    })
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


    const handleTodoFormClickOpenNewTodo = () =>
        setTodoForm({ currentTodo: DEFAULT_TODO, open: true })

    const handleTodoFormClickEditTodo = _id =>
        setTodoForm({ currentTodo: todos.find(t => t._id === _id), open: true })


    const handleTodoFormClose = ({ save = false, todo = {} }) => {
        if (save) {
            if (todoForm.currentTodo._id) {
                // Edit todo
                // apiPutTodo()
                setTodos(todos.map(t => t._id == todo._id ? todo : t))

            } else {
                // New todo
                // apiPostTodo()
                setTodos([todo, ...todos])
            }
        }
        // Close Dialog
        setTodoForm({ ...todoForm, open: false })
    }    

    const handleRemoveTodo = _id =>
        setTodos(todos.filter(t => t._id !== _id))

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
    //console.log(todoForm.currentTodo)
    return (
        <section className={classes.pageContainer}>
            <div className={classes.grid}>
                <TodoList
                    todos={filterAndSortTodos({ todos, filters })}
                    changeDone={handleTodoDone}
                    editTodo={handleTodoFormClickEditTodo}
                    removeTodo={handleRemoveTodo}
                />
                <Menu
                    handleTodoFormClickOpenNewTodo={handleTodoFormClickOpenNewTodo}
                    filters={filters}
                    setFilters={setFilters}
                    counter={counter}
                />
                <DialogForm
                    open={todoForm.open}
                    currentTodo={todoForm.currentTodo}
                    handleTodoFormClose={handleTodoFormClose}
                />
            </div>
        </section>
    )
}

export default TodoLayout