import { createMuiTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export default createMuiTheme({
    palette: {
        primary: {
            light: grey[600],
            main: grey[800],
            dark: grey[900],
            contrastText: grey[100]
        },
        type: 'dark'
    },
    spacing: 10,
})