const contactLinks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@aispace.kr',
    href: 'mailto:hello@aispace.kr',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.141-.828 3.33-.236.995.499 1.806 1.48 1.806 1.773 0 3.141-1.872 3.141-4.573 0-2.39-1.717-4.061-4.168-4.061-2.837 0-4.502 2.126-4.502 4.326 0 .856.33 1.775.741 2.276.082.099.093.186.069.288-.076.309-.244.995-.277 1.134-.045.183-.15.221-.345.133-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
      </svg>
    ),
    label: 'KakaoTalk',
    value: '@aispace',
    href: '#',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    label: 'Instagram',
    value: '@aispace_design',
    href: '#',
  },
]

export default function Contact() {
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
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
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
            <a
              href="mailto:hello@aispace.kr"
              className="btn-primary inline-flex"
            >
              강의 문의하기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <div className="mt-10 pt-10 border-t border-white/[0.07]">
              <p className="font-display-serif italic text-white/20 text-lg">
                "Design is not just what it looks like and feels like.
                <br />
                Design is how it works."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
