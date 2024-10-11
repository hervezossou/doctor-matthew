import Header from './components/sections/Header'
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
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AppointmentSection />
        <VideoSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
