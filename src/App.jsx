import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import PictureBoard from './pages/PictureBoard'
import CustomerThought from './pages/CustomerThought'
import Footer from './pages/Footer'
import { Box, Typography, Container } from '@mui/material'

function App() {
  

  return (
    <Container maxWidth={false} sx={{ maxWidth: 1720 }}>
      <Navbar />
      <Hero />
      <PictureBoard />
      <CustomerThought />
      <Footer />
    </Container>
  )
}

export default App
