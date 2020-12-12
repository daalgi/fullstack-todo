import React from 'react'

import Login from './Account/Login'


const barRoutes = [
    {
        label: "Sign Up", icon: "", path: "/login", exact: true,
        main: _ => <Login />
    },
    {
        label: "Log In", icon: "", path: "/login", exact: true,
        main: _ => <Login />
    },
    {
        label: "Log Out", icon: "", path: "/login", exact: true,
        main: _ => <Login />
    },
    {
        label: "Profile", icon: "", path: "/login", exact: true,
        main: _ => <Login />
    },    
]

const internalRouts = [

]

export {
    barRoutes, internalRouts
}