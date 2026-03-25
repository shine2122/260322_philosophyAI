const services = [
  {
    number: '01',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'AI 공간디자인 5주 완성 과정',
    subtitle: 'Space Design Course',
    description: 'Midjourney + Gemini + 나노바나나를 연결해 공간디자인 실무 흐름 전체를 익히는 과정. 이미지 생성부터 리노베이션 시안, 포트폴리오까지 완성합니다.',
    features: ['Midjourney 심화 활용', '나노바나나 고급 수정', '리노베이션 시안 제작', '최종 공간 제안서 완성'],
    badge: '5회 / 10시간',
  },
  {
    number: '02',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: '기업·대학 AI 특강',
    subtitle: 'Corporate & University',
    description: '서울예술대학교, 경기대학교 등 대학 강의 및 기업 특강 진행. AI 공간디자인 실무 워크플로우를 현장 중심으로 전달합니다.',
    features: ['공간디자인 전공 대상', '기업 업무 프로세스 연계', 'ComfyUI · Mixboard 활용', '데이터 시각화 포함'],
    badge: '맞춤 설계',
  },
  {
    number: '03',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: '1:1 AI 컨설팅',
    subtitle: 'Private Consulting',
    description: '개인/기업 맞춤형 AI 도구 활용 전략 수립. 현재 디자인 업무 프로세스를 분석하고 최적의 AI 도입 방안을 함께 설계합니다.',
    features: ['현업 프로세스 분석', 'AI 툴 선정 및 세팅', '맞춤 워크플로우 설계', '지속적 사후 지원'],
    badge: '집중 코칭',
  },
]

interface ServicesProps {
  onOpenModal: () => void
}

export default function Services({ onOpenModal }: ServicesProps) {
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
            공간디자인 박사의 시각으로 설계된 AI 실무 교육 프로그램
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

              {/* Badge */}
              {service.badge && (
                <div className="absolute top-4 left-4">
                  <span className="font-korean text-[10px] text-gold/60 border border-gold/20 px-2 py-0.5 tracking-wider">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold mb-6 mt-6
                              group-hover:border-gold/60 group-hover:bg-gold/5 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <p className="font-playfair italic text-gold/50 text-sm tracking-wider mb-1">
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
                onClick={onOpenModal}
                className="font-korean text-gold/70 text-sm tracking-wider flex items-center gap-2
                           hover:text-gold transition-colors duration-300 group/btn"
              >
                문의하기
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent
                              scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </div>

        {/* Course detail callout */}
        <div className="mt-12 reveal card-glass p-8 border border-gold/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="font-korean text-white/30 text-xs tracking-widest uppercase mb-2">현재 모집 중</p>
              <h3 className="font-korean font-medium text-white text-lg mb-1">
                미드저니 & 나노바나나로 AI 공간디자인 5주 완성 과정
              </h3>
              <p className="font-korean text-white/40 text-sm">
                04월 22일 ~ 05월 13일 · 매주 수요일 오후 8시~10시 · Google Meet 실시간 강의 · 정원 8명
              </p>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="text-right">
                <p className="font-korean text-white/30 text-xs">수강료</p>
                <p className="font-playfair text-xl text-gold font-semibold">1회(2시간)당 수강료, 5만원</p>
              </div>
              <button
                onClick={onOpenModal}
                className="btn-primary text-xs py-3"
              >
                강의 문의하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
