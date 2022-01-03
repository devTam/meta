import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import RoadMap from './components/RoadMap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Box>

      <Container maxWidth="md">
        <h1>LOGO</h1>
        <Hero />
        <About />
        <Team />
        <FAQ />
        <RoadMap />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;
