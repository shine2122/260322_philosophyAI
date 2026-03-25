import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import CareerSection from './components/CareerSection'
import TestimonialsSection from './components/TestimonialsSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function PortfolioPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="noise-overlay min-h-screen bg-navy text-white overflow-x-hidden">
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero />
        <About />
        <Services onOpenModal={() => setIsModalOpen(true)} />
        <Portfolio />
        <CareerSection />
        <TestimonialsSection />
        <Contact onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}
