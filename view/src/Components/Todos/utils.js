import startOfWeek from 'date-fns/startOfWeek'
import endOfWeek from 'date-fns/endOfWeek'
import isValid from 'date-fns/isValid'


/**
 * DATE RELATED FUNCTIONS
 */
const formatDate = date =>
    date.getFullYear() + '-' +
    ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
    ("0" + date.getDate()).slice(-2)

const todayFormattedDate = () => formatDate(new Date())

const thisWeekDateRange = () =>
    [
        formatDate(startOfWeek(new Date())),
        formatDate(endOfWeek(new Date()))
    ]

const thisMonthDate = () => todayFormattedDate().slice(0, -3)

const dateIncluded = (reference, comparison) => {
    if (!reference || isValid(new Date(reference)))
        return false
    else if (isValid(new Date(comparison)))
        return reference.includes(comparison)
    else if (Array.isArray(comparison) && comparison.length == 2) {
        return reference >= comparison[0] && reference <= comparison[1]
    }
    else
        throw Error('dateIncluded: not implemented case.')
}


/**
 * OBJECT HANDLERS RELATED FUNCTIONS
 */
const makeAllKeysFalse = obj =>
    Object.assign(...Object.keys(obj).map(k => ({ [k]: false })))


/**
 * FILTER TODOS RELATED FUNCTIONS
 */
const filterByDate = ({ todo, filters }) => {
    if (filters.dateDueUndefined)
        return !todo.date?.due ? true : false
    if (!filters.dateDueUndefined && !todo.date.due)
        return false
    if (filters.dateDue && todo.date.due && !dateIncluded(todo.date.due, filters.dateDue))
        return false
    if (filters.dateDone && todo.date.done && !dateIncluded(todo.date.done, filters.dateDone))
        return false
    if (filters.dateCreated && todo.date.created && !dateIncluded(todo.date?.created, filters.dateCreated))
        return false

    return true
}

const filterTodos = ({ todos, filters }) => {
    return todos.filter(todo => {
        /*
        if (filters.priority && todo.priority !== filters.priority)
            return false
        if (filters.text && !todo.text.includes(filters.text))
            return false*/

        // Show all not done (independent of the date.due)
        // all the filters but notDue are false
        if (filters.notDone && !todo.date.done &&
            Object.values(filters).reduce((acc, cur) => acc + cur) == 1)
            return true

        // Filter by date
        if (!filterByDate({ todo, filters }))
            return false

        // Optional filters: return true if the condition is met
        if (filters.done && todo.date?.done)
            return true
        if (filters.notDone && !todo.date.done)
            return true

        return false
    })
}

const sortTodosByDateDue = todos =>
    todos.sort((a, b) => {
        // Put the null date.due in last positions
        if (a.date.due < b.date.due || !b.date.due)
            return -1
        if (a.date.due > b.date.due || !a.date.due)
            return +1
        return 0
    })

const filterAndSortTodos = ({ todos, filters }) =>
    sortTodosByDateDue(filterTodos({ todos, filters }))

/**
 * TODOS STATISTICS RELATED FUNCTIONS
 */
const countTodos = todos => {
    let [all, dueToday, dueThisWeek, dueThisMonth, dueUndefined] = Array(5).fill(0)
    let notDone = { all, dueToday, dueThisWeek, dueThisMonth, dueUndefined }
    let doneNotDone = { all, dueToday, dueThisWeek, dueThisMonth, dueUndefined }
    if (!todos || !Array.isArray(todos))
        return { notDone, doneNotDone }

    let i = 0
    all = todos.length
    let today = todayFormattedDate()
    let thisWeek = thisWeekDateRange()
    let thisMonth = thisMonthDate()
    for (; i < all; i++) {
        if (dateIncluded(todos[i].date.due, today)) {
            doneNotDone.dueToday++
            doneNotDone.dueThisWeek++
            doneNotDone.dueThisMonth++
            if (!todos[i].date.done) {
                notDone.dueToday++
                notDone.dueThisWeek++
                notDone.dueThisMonth++
            }
        } else if (dateIncluded(todos[i].date.due, thisWeek)) {
            doneNotDone.dueThisWeek++
            doneNotDone.dueThisMonth++
            if (!todos[i].date.done) {
                notDone.dueThisWeek++
                notDone.dueThisMonth++
            }
        } else if (dateIncluded(todos[i].date.due, thisMonth)) {
            doneNotDone.dueThisMonth++
            if (!todos[i].date.done)
                notDone.dueThisMonth++
        } else if (!todos[i].date.due) {
            doneNotDone.dueUndefined++
            if (!todos[i].date.done)
                notDone.dueUndefined++
        }

        if (!todos[i].date.done) {
            doneNotDone.all++
            if (!todos[i].date.done)
                notDone.all++
        }

    }
    return { notDone, all: doneNotDone }
}


export {
    //formatDate,
    todayFormattedDate,
    thisWeekDateRange,
    thisMonthDate,
    makeAllKeysFalse,
    filterTodos,
    filterAndSortTodos,
    countTodos
}