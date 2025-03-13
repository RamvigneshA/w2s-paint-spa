import { Container } from '@mui/material'
import Navbar from './layout/Navbar'
import Hero from './layout/Hero'
import PictureBoard from './layout/PictureBoard'
import Testimonials from './layout/Testimonials'
import Footer from './layout/Footer'
import Leaf from './components/Leaf'

function App() {
  return (
    <Container sx={{ maxWidth: 1000, position: 'relative' }}>
      <Leaf /> 
      <Navbar />
      <Hero />
      <PictureBoard />
      <Testimonials />
      <Footer />
    </Container>
  )
}

export default App
