
import { ThemeProvider } from 'styled-components'
import './App.css'
import { Header } from './components/Header'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { SignUp } from './components/Signup'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <Header></Header>
      <SignUp/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
