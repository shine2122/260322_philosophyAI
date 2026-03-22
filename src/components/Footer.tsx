export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.05] py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display-serif text-gold tracking-widest text-lg">CRI.AI.TIVE</span>
            <span className="font-korean text-white/20 text-xs tracking-wider mt-0.5">
              크리AI티브 · 김동섭
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {['소개', '강의', 'AI 데모', '갤러리', '문의'].map((item, i) => {
              const ids = ['about', 'services', 'demo', 'portfolio', 'contact']
              return (
                <button
                  key={item}
                  onClick={() => document.getElementById(ids[i])?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-korean text-white/30 text-xs hover:text-white/60 transition-colors"
                >
                  {item}
                </button>
              )
            })}
          </nav>

          {/* Copyright */}
          <p className="font-korean text-white/20 text-xs">
            © {year} 크리AI티브. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
