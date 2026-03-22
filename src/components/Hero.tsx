export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d1220]" />

      {/* Architectural grid lines */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(200,169,110,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,169,110,1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Brand tag */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-gold/60" />
            <span className="font-korean text-gold/70 text-xs tracking-[0.3em] uppercase">
              CRI.AI.TIVE · 크리AI티브
            </span>
            <span className="w-8 h-px bg-gold/60" />
          </div>

          {/* Main title */}
          <h1 className="font-display-serif text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-none">
            AI 공간을
            <br />
            <span className="text-gradient-gold italic">설계하다</span>
          </h1>

          <p className="font-display-serif text-xl md:text-2xl text-white/30 italic mb-8 tracking-widest">
            Designing Spaces with Artificial Intelligence
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-16 h-px bg-gold/40" />
            <span className="text-gold/40 text-xs">✦</span>
            <span className="w-16 h-px bg-gold/40" />
          </div>

          <p className="font-korean text-lg md:text-xl text-white/60 mb-12 tracking-wider leading-relaxed">
            공간디자인 박사 × AI 교육 전문가
            <br />
            <span className="text-white/40 text-base">Midjourney · Gemini · 나노바나나로 공간을 제안하는 방법</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleScroll('services')}
              className="btn-primary"
            >
              강의 살펴보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('demo')}
              className="btn-outline"
            >
              AI 데모 체험하기
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-korean text-white/20 text-xs tracking-widest">SCROLL</span>
          <svg className="w-4 h-4 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-gold/20" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r border-t border-gold/20" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l border-b border-gold/20" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-gold/20" />
    </section>
  )
}
