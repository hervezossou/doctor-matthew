import './App.css'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ServicesSection from './components/sections/ServicesSection'
import AppointmentSection from './components/sections/Appointment'
import TestimonialsSection from './components/sections/TestimonialsSection'
import VideoSection from './components/sections/VideoSection'
import Footer from './components/sections/Footer'

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AppointmentSection />
        <TestimonialsSection />
        <VideoSection />
      </main>
      <Footer />
    </>
  )
}

export default App
