const portfolioItems = [
  {
    id: 1,
    label: '모던 리빙룸',
    tag: 'AI 생성 인테리어 #1',
    gradient: 'from-slate-700 via-slate-800 to-navy',
  },
  {
    id: 2,
    label: '스칸디나비안 카페',
    tag: 'AI 생성 인테리어 #2',
    gradient: 'from-stone-700 via-stone-800 to-navy',
  },
  {
    id: 3,
    label: '인더스트리얼 오피스',
    tag: 'AI 생성 인테리어 #3',
    gradient: 'from-zinc-700 via-zinc-800 to-navy',
  },
  {
    id: 4,
    label: '젠 가든',
    tag: 'AI 생성 인테리어 #4',
    gradient: 'from-neutral-700 via-neutral-800 to-navy',
  },
  {
    id: 5,
    label: '럭셔리 펜트하우스',
    tag: 'AI 생성 인테리어 #5',
    gradient: 'from-amber-900 via-stone-800 to-navy',
  },
  {
    id: 6,
    label: '미니멀 서재',
    tag: 'AI 생성 인테리어 #6',
    gradient: 'from-gray-700 via-gray-800 to-navy',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-[#080c18]" />

      <div className="relative z-10 section-container">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="gold-line-center" />
          <p className="section-tag mb-4">Gallery</p>
          <h2 className="font-display-serif text-4xl md:text-5xl text-white">
            AI 생성 공간 갤러리
          </h2>
          <p className="font-korean text-white/40 mt-4 max-w-xl mx-auto">
            Gemini AI로 생성된 공간 이미지 샘플. 직접 데모를 체험해보세요.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, i) => (
            <div
              key={item.id}
              className="reveal group relative aspect-square overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Gradient placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`} />

              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: `linear-gradient(rgba(200,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />

              {/* AI label */}
              <div className="absolute top-4 left-4">
                <span className="font-korean text-white/40 text-xs px-2 py-1 border border-white/10 bg-navy/40 backdrop-blur-sm">
                  AI Generated
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              flex flex-col items-center justify-center gap-3">
                <p className="font-display-serif text-2xl text-white italic">{item.label}</p>
                <p className="font-korean text-white/50 text-xs tracking-widest">{item.tag}</p>
                <div className="w-8 h-px bg-gold/60 mt-2" />
              </div>

              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy/80 to-transparent">
                <p className="font-korean text-white/60 text-xs">{item.tag}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <p className="font-korean text-white/40 text-sm mb-6">
            이런 이미지를 직접 만들어보고 싶다면?
          </p>
          <button
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            AI 데모 체험하기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
