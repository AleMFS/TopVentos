import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globa'
import { defaultTheme } from './styles/themes/default'
import teste from '../src/assets/Ventiladores/Arno/Mesa/VEPX/0.jpg'
import { HashRouter } from 'react-router-dom'
import { Router } from './Router'
export default function App() {
  return (

    <ThemeProvider theme={defaultTheme}>

      <HashRouter>
        <Router />
      </HashRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}