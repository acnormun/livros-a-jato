
import { ThemeProvider } from 'styled-components'
import './App.css'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <Header></Header>
      <h1>Home</h1>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
