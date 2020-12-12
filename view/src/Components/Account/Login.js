import React, { useState, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

import axios from 'axios';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
    customError: {
        color: 'red',
        fontSize: '0.8rem',
        marginTop: 10
    },
    progess: {
        position: 'absolute'
    }
}))

const Login = props => {
    const [state, setState] = useState({
        email: '',
        password: '',
        errors: {},
        loading: false
    })
    const classes = useStyles()

    /*useEffect(() => {

    }, [state.errors])*/

    const handleChange = e =>
        setState({ ...state, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
        setState({ ...state, loading: true })
        const userData = {
            email: state.email,
            password: state.password
        }
        axios
            .post('http://localhost:5000/fullstack-todo-ba690/us-central1/api/login', userData)
            .then(res => {
                localStorage.setItem('AuthToken', `Bearer ${res.data.token}`)
                setState({ ...state, loading: false })
                props.history.push('/')
            })
            .catch(err =>
                setState({ 
                    ...state, 
                    errors: { ...err.response.data }, 
                    loading: false 
                })
            )
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
				</Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        helperText={state.errors.email}
                        error={state.errors.email ? true : false}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={state.errors.password}
                        error={state.errors.password ? true : false}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                        disabled={state.loading || !state.email || !state.password}
                    >
                        Sign In
							{state.loading && <CircularProgress size={30} className={classes.progess} />}
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    {state.errors.general && (
                        <Typography variant="body2" className={classes.customError}>
                            {state.errors.general}
                        </Typography>
                    )}
                </form>
            </div>
        </Container>
    )

}

export default Login