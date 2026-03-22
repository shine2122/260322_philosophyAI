const services = [
  {
    number: '01',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI 이미지 생성 강의',
    subtitle: 'Image Generation',
    description: 'Midjourney, Stable Diffusion, DALL-E를 활용한 공간 이미지 생성 실무 강의. 인테리어 렌더링부터 건축 비주얼라이제이션까지 실무에 바로 적용 가능한 기술을 배웁니다.',
    features: ['Midjourney 심화', 'ControlNet 활용', '인테리어 프롬프팅', '배치/합성 기법'],
  },
  {
    number: '02',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI 영상 제작 강의',
    subtitle: 'Video Production',
    description: 'Sora, Runway Gen-3 등 최신 AI 영상 도구로 공간 연출 영상을 제작합니다. 인테리어 투어 영상, 건축 프레젠테이션 영상 등 실무형 콘텐츠 제작 노하우를 전수합니다.',
    features: ['Sora 활용법', 'Runway Gen-3', '공간 투어 영상', '클라이언트 PT 영상'],
  },
  {
    number: '03',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '1:1 맞춤 컨설팅',
    subtitle: 'Private Consulting',
    description: '개인/기업 맞춤형 AI 도구 활용 전략 수립 및 집중 코칭. 현재 업무 프로세스를 분석하고 최적의 AI 도입 방안을 함께 설계합니다.',
    features: ['현업 프로세스 분석', 'AI 도구 선정', '맞춤 커리큘럼', '사후 지원'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-[#080c18]" />

      <div className="relative z-10 section-container">
        {/* Section header */}
        <div className="text-center mb-20 reveal">
          <div className="gold-line-center" />
          <p className="section-tag mb-4">Services</p>
          <h2 className="font-display-serif text-4xl md:text-5xl text-white">
            강의 & 서비스
          </h2>
          <p className="font-korean text-white/40 mt-4 max-w-xl mx-auto">
            공간디자인 전문가의 시각으로 설계된 AI 교육 프로그램
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="reveal card-glass p-8 flex flex-col group relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Number watermark */}
              <div className="absolute top-4 right-6 font-display-serif text-7xl text-white/[0.03] leading-none select-none">
                {service.number}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold mb-6
                              group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <p className="font-display-serif italic text-gold/50 text-sm tracking-wider mb-1">
                {service.subtitle}
              </p>
              <h3 className="font-korean font-medium text-white text-xl mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-korean text-white/50 text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 font-korean text-white/40 text-xs">
                    <span className="w-1 h-1 rounded-full bg-gold/60 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-korean text-gold/70 text-sm tracking-wider flex items-center gap-2
                           hover:text-gold transition-colors duration-300 group/btn"
              >
                문의하기
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
