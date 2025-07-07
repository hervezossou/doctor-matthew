import Header from './components/organisms/Header'
import HeroSection from './components/organisms/HeroSection'
import AboutSection from './components/organisms/AboutSection'
import ServicesSection from './components/organisms/ServicesSection'
import AppointmentSection from './components/organisms/Appointment'
import TestimonialsSection from './components/organisms/TestimonialsSection'
import VideoSection from './components/organisms/VideoSection'
import Footer from './components/organisms/Footer'

function App() {
  return (
    <div className="mx-auto max-w-screen-2xl bg-alice-blue">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <section className="bg-pure-white">
          <AppointmentSection />
          <VideoSection />
        </section>
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
