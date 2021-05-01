import '../styles/globals.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1160F7',
      dark: '#37517A'
    },
    secondary: {
      light: '#ffffff',
      main: '#2EBC31'
    }
  },
  typography: {
    fontFamily: ['Segoe UI'],
    fontWeightRegular: 500,
    allVariants: {
      color: '#37517A'
    }
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: [32, '!important'],
        fontWeight: 500
      },
      h2: {
        fontSize: [34, '!important'],
        fontWeight: 500
      },
      h3: {
        fontSize: [20, '!important'],
        fontWeight: 500
      },
      body1: {
        fontSize: [16, '!important'],
        fontWeight: 400
      }
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  )
}

export default MyApp
