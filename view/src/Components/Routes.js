import React from 'react'

import Signup from './Account/Signup'
import Login from './Account/Login'
import Logout from './Account/Logout'
import Profile from './Account/Profile'
import Todos from './Todos'


const barRoutes = [
    {
        label: "Sign Up", icon: "", path: "/signup", exact: true,
        main: _ => <Signup />
    },
    {
        label: "Log In", icon: "", path: "/login", exact: true,
        main: _ => <Login />
    },
    {
        label: "Log Out", icon: "", path: "/logout", exact: true,
        main: _ => <Logout />
    },
    {
        label: "Profile", icon: "", path: "/profile", exact: true,
        main: _ => <Profile />
    },    
]

const internalRoutes = [
    {
        label: "Todos", icon: "", path: "/", exact: true,
        main: _ => <Todos />
    }
]

export {
    barRoutes, internalRoutes
}