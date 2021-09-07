import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import {
    todayFormattedDate, thisWeekDateRange, thisMonthDate, makeAllKeysFalse
} from './utils'


const useStyles = makeStyles(theme => ({
    filterList: {
        paddingRight: "8px"
    },
    menuItem: {
        listStyleType: "none",
        padding: "8px 0px 8px 8px",
        cursor: "pointer",
        "&:hover": {
            borderRadius: "4px",
            textDecoration: "underline",
            background: "hsl(0, 0%, 23%)"
        }
    },
    menuSubtitle: {
        listStyleType: "none",
        padding: "8px 0px 8px 8px",
        paddingTop: "16px",
    },
    menuSubitem: {
        /*listStyleType: "none",
        padding: "8px 0px 8px 24px",
        cursor: "pointer",
        "&:hover": {
            borderRadius: "4px",
            textDecoration: "underline",
            background: "hsl(0, 0%, 23%)"
        }*/
        display: "block",
        appearance: "none",
        cursor: "pointer",
        padding: "8px 0px 8px 24px",
        "&:hover": {
            borderRadius: "4px",
            textDecoration: "underline",
            background: "hsl(0, 0%, 23%)"
        },
        "& input[type='radio']:checked": {
            borderRadius: "4px",
            textDecoration: "underline",
            background: "hsl(0, 0%, 23%)"
        }
        /*
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
        },*/
    }

}))


const NOT_DONE_FILTERS = [
    {
        label: counter => `All (${counter.notDone.all})`,
        activate: (filters, setFilters) =>
            setFilters({ ...makeAllKeysFalse(filters), notDone: true })
    },
    {
        label: counter => `Due today (${counter.notDone.dueToday})`,
        activate: (filters, setFilters) =>
            setFilters({
                ...makeAllKeysFalse(filters),
                dateDue: todayFormattedDate(),
                notDone: true
            })
    },
    {
        label: counter => `Due this week (${counter.notDone.dueThisWeek})`,
        activate: (filters, setFilters) =>
            setFilters({
                ...makeAllKeysFalse(filters),
                dateDue: thisWeekDateRange(),
                notDone: true
            })
    },
    {
        label: counter => `Due this month (${counter.notDone.dueThisMonth})`,
        activate: (filters, setFilters) =>
            setFilters({
                ...makeAllKeysFalse(filters),
                dateDue: thisMonthDate(),
                notDone: true
            })
    },
    {
        label: counter => `Due undefined (${counter.notDone.dueUndefined})`,
        activate: (filters, setFilters) =>
            setFilters({
                ...makeAllKeysFalse(filters),
                dateDueUndefined: true,
                notDone: true
            })
    },
]
const DUE_FILTERS = [
    {
        label: counter => `Today (${counter.all.dueToday})`,
        activate: (filters, setFilters) =>
            setFilters({
                ...makeAllKeysFalse(filters),
                dateDue: todayFormattedDate(),
                done: true, notDone: true
            })
    },
    {
        label: counter => `This week (${counter.all.dueThisWeek})`,
        activate: (filters, setFilters) =>
            setFilters({
                ...makeAllKeysFalse(filters),
                dateDue: thisWeekDateRange(),
                done: true, notDone: true
            })
    },
    {
        label: counter => `This month (${counter.all.dueThisMonth})`,
        activate: (filters, setFilters) =>
            setFilters({
                ...makeAllKeysFalse(filters),
                dateDue: thisMonthDate(),
                done: true, notDone: true
            })
    },
    /*{
        label: counter => `Undefined (${counter.all.dueUndefined})`,
        //checked: filters => filters.dateDueUndefined,
        activate: (filters, setFilters) =>
            setFilters({ ...makeAllKeysFalse(filters), 
                done: true, notDone: true, dateDueUndefined: true })
    },*/
]

const OPTIONAL_FILTERS = [
    {
        label: counter => `Not done (${counter.notDone})`,
        checked: filters => filters.notDone,
        onChange: (filters, setFilters) => setFilters({ ...filters, notDone: !filters.notDone })
    },
    {
        label: counter => "Done",
        checked: filters => filters.done,
        onChange: (filters, setFilters) => setFilters({ ...filters, done: !filters.done })
    },
]

const MENU_SUBITEM_SANGRIA = '  '

const Menu = ({ filters, setFilters, counter, handleTodoFormClickOpenNewTodo }) => {
    const classes = useStyles()

    return (
        <div className={classes.filterList}>
            <li className={classes.menuItem}
                onClick={handleTodoFormClickOpenNewTodo}>
                New TODO
            </li>

            <li className={classes.menuSubtitle}>Show not done:</li>
            {NOT_DONE_FILTERS.map((filter, index) =>
                <label key={index} className={classes.menuSubitem}>
                    <input
                        type="radio"
                        name="menu-show"
                        onChange={() => filter.activate(filters, setFilters)}
                    /><span>{filter.label(counter)}</span>
                </label>
            )}
            <li className={classes.menuSubtitle}>Show all due:</li>
            {DUE_FILTERS.map((filter, index) =>
                <label key={index} className={classes.menuSubitem}>
                    <input type="radio" name="menu-show"
                        onChange={() => filter.activate(filters, setFilters)}
                    /><span>{filter.label(counter)}</span>
                </label>
            )}

            {/*<li className={classes.menuItem}>Filters:</li>
            <ul>
                {OPTIONAL_FILTERS.map((filter, index) =>
                    <li key={index} className={classes.menuItem}>
                        <input
                            type="checkbox"
                            id={'filter-optional-' + filter.label}
                            checked={filter.checked(filters)}
                            onChange={() => filter.onChange(filters, setFilters)}
                        />
                        <span>{filter.label(counter)}</span>
                    </li>
                )}
            </ul>*/}
        </div>
    )
}

export default Menu