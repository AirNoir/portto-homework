import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ChakraProvider, CSSReset, Heading, Box, Link as ChakraLink } from '@chakra-ui/react'
import logo from './resources/logo.svg'
import ListPage from './pages/ListPage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Box p={4}>
          <Heading>
            <ChakraLink as={Link} to="/">
              <img src={logo} alt="logo" width={100} />
            </ChakraLink>
          </Heading>
        </Box>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/detail/:asset_contract_address/:token_id" element={<DetailPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
