import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import type { NavItem } from '../types'

const navItems: NavItem[] = [
  { id: 'about', label: '소개', href: '#about' },
  { id: 'services', label: '강의', href: '#services' },
  { id: 'portfolio', label: '갤러리', href: '#portfolio' },
  { id: 'contact', label: '문의', href: '#contact' },
]

interface HeaderProps {
  onOpenModal: () => void
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const isProposalPage = location.pathname === '/proposal'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section tracking
      const sections = navItems.map((item) => item.id)
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (isProposalPage) {
      navigate('/' + href)
      return
    }
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleModalOpen = () => {
    setMenuOpen(false)
    onOpenModal()
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="flex flex-col leading-none group"
        >
          <span className="font-display-serif text-xl text-gold tracking-widest group-hover:text-gold-light transition-colors">
            AI SPACE
          </span>
          <span className="font-korean text-[10px] text-white/40 tracking-ultra uppercase mt-0.5">
            Design × Education
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className={`font-korean text-sm tracking-wider transition-all duration-300 relative py-1 ${
                activeSection === item.id
                  ? 'text-gold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
              )}
            </button>
          ))}
          <button
            onClick={() => navigate('/proposal')}
            className="font-korean text-sm tracking-wider transition-all duration-300 relative py-1 text-white/60 hover:text-gold flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            제안서 생성기
          </button>
          <button
            onClick={handleModalOpen}
            className="btn-primary text-xs py-2.5 px-5"
          >
            강의 문의
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="메뉴"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-4 h-px bg-gold transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-navy/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className={`font-korean text-sm tracking-wider text-left py-2 border-b border-white/5 transition-all duration-300 ${
                activeSection === item.id ? 'text-gold' : 'text-white/70'
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={handleModalOpen}
            className="btn-primary text-xs py-3 mt-2 justify-center"
          >
            강의 문의하기
          </button>
        </nav>
      </div>
    </header>
  )
}
