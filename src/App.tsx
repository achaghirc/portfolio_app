import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'
import './App.css'
import Hero from './components/Hero'
import Links from './components/Links'

const theme = extendBaseTheme({
  styles: {
    global: {
      body: {
        bg: 'black.500',
        color: 'white.500',
      },
    },
  },
})

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Hero /> 
      <Links />      
    </ChakraProvider>
  )
}

export default App
