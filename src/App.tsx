import { Box, ChakraProvider, extendBaseTheme, Link } from '@chakra-ui/react'
import './App.css'
import Hero from './components/Hero'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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

  //Download the resume pdf locate in assets with name Amine Chaghir.pdf
  const onDownload = () => {
    window.open('/src/assets/Amine Chaghir.pdf', '_blank')
  }
  return (
    <ChakraProvider theme={theme}>
      <Hero /> 
      <footer>

        <Box position={'absolute'} bottom={0}>
            <Link onClick={() => onDownload()} isExternal>
                View full resume <ExternalLinkIcon mx='2px' />
            </Link>
        </Box>
      </footer>
    </ChakraProvider>
  )
}

export default App
