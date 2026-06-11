
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className= "bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Booking />
      <Testimonials />
      <Footer />
    </div>

  )
}

export default App