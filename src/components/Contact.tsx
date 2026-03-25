const contactLinks = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    label: 'YouTube',
    value: '@cri-ai-tive',
    href: 'https://www.youtube.com/@cri-ai-tive',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
    label: 'Website',
    value: 'cri-ai-tive.com',
    href: 'http://cri-ai-tive.com',
  },
]

interface ContactProps {
  onOpenModal: () => void
}

export default function Contact({ onOpenModal }: ContactProps) {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c18] to-navy" />

      <div className="relative z-10 section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <div className="reveal">
            <div className="gold-line-center" />
            <p className="section-tag mb-4">Contact</p>
            <h2 className="font-display-serif text-4xl md:text-5xl text-white mb-6">
              함께 만들어가요
            </h2>
            <p className="font-korean text-white/50 leading-relaxed mb-12">
              강의 문의, 기업 교육, 1:1 컨설팅 등 어떤 내용이든 편하게 연락주세요.
              <br />
              <span className="text-white/30">빠른 시일 내에 답변드리겠습니다.</span>
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12 reveal" style={{ transitionDelay: '0.1s' }}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="card-glass p-6 flex flex-col items-center gap-3 group"
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold
                                group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300">
                  {link.icon}
                </div>
                <div>
                  <p className="font-korean text-white/30 text-xs tracking-wider mb-1">{link.label}</p>
                  <p className="font-korean text-white/70 text-sm group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Main CTA */}
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <button
              onClick={onOpenModal}
              className="btn-primary inline-flex"
            >
              강의 문의하기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>

            <div className="mt-10 pt-10 border-t border-white/[0.07]">
              <p className="font-playfair italic text-white/20 text-lg">
                "이미지를 만드는 사람이 아니라,
                <br />
                공간을 제안하는 사람이 됩니다."
              </p>
              <p className="font-korean text-white/20 text-xs mt-3">— 크리AI티브 대표 김동섭</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
