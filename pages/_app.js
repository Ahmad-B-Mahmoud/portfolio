import '../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc857ff',
    },
    secondary: {
      main: '#daffedff',
    },
    dark: {
      main: '#1f2041ff'
    },
    success: {
      main: '#19647eff'
    },
    mode: 'dark'
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

