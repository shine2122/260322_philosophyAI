const skills = [
  'Midjourney',
  '나노바나나',
  'Gemini AI',
  'ComfyUI',
  'Sora',
  'Runway',
  '공간디자인',
  '인테리어 렌더링',
  'AI 영상 제작',
  'Stable Diffusion',
]

const stats = [
  { value: '113편+', label: 'AI 강의 영상' },
  { value: '14회+', label: '강의/특강 이력' },
  { value: 'Ph.D.', label: '공간디자인 박사' },
  { value: '100명+', label: '컨퍼런스 참석자' },
]

const education = [
  { year: '2001–2002', school: 'Chelsea College of Arts', degree: 'MA Environmental Design' },
  { year: '2002–2003', school: 'UCL (University of London)', degree: 'MSc Virtual Environments' },
  { year: '2007–2013', school: '홍익대학교 일반대학원', degree: '공간디자인 박사 (Ph.D.)' },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0b0f1c] to-navy" />

      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="reveal">
            <div className="gold-line" />
            <p className="section-tag mb-4">About</p>
            <h2 className="font-display-serif text-4xl md:text-5xl text-white mb-2 leading-tight">
              김동섭
            </h2>
            <p className="font-korean text-gold/70 tracking-wider mb-8">
              AI 공간디자인 전문가 · 크리AI티브 대표
            </p>

            <div className="space-y-5 font-korean text-white/80 leading-relaxed">
              <p>
                공간디자인 박사(홍익대)로, 인테리어·전시·VR/AR 프로젝트를 수행해온
                디자인 전문가입니다.
              </p>
              <p>
                현재는 생성형 AI를 활용한 공간디자인 교육과 콘텐츠 제작을 중심으로,
                <span className="text-gold"> Midjourney + Gemini + 나노바나나 통합 실무 교육</span>을
                진행하고 있습니다.
              </p>
              <p>
                단순히 이미지를 만드는 것이 아닌, <span className="text-gold">"공간을 제안하는 수준"</span>으로
                AI 툴을 활용하는 방법을 가르칩니다.
              </p>
            </div>

            {/* Education */}
            <div className="mt-10">
              <p className="font-korean text-white/55 text-xs tracking-widest uppercase mb-4">학력</p>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.school} className="flex gap-4">
                    <span className="font-korean text-white/50 text-xs mt-0.5 whitespace-nowrap">{edu.year}</span>
                    <div>
                      <p className="font-korean text-white/80 text-sm">{edu.school}</p>
                      <p className="font-korean text-white/60 text-xs">{edu.degree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <p className="font-korean text-white/55 text-xs tracking-widest uppercase mb-4">전문 분야</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-korean text-xs px-3 py-1.5 border border-gold/40 text-gold/90
                               hover:border-gold hover:text-gold transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Photo + Stats + Quote */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>

            {/* Profile photo */}
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative w-48 h-60 overflow-hidden border border-white/10">
                <img
                  src="/images/KimDongseop.png"
                  alt="김동섭 프로필"
                  className="w-full h-full object-cover object-top"
                />
                {/* subtle gold corner accent */}
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/40 pointer-events-none" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/40 pointer-events-none" />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-white/[0.05] mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-navy p-8 text-center hover:bg-white/[0.03] transition-colors"
                >
                  <div className="font-playfair text-4xl text-gold mb-2 font-semibold tracking-wide">{stat.value}</div>
                  <div className="font-korean text-white/65 text-xs tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div className="card-glass p-8 relative">
              <div className="absolute top-4 left-6 font-display-serif text-6xl text-gold/10 leading-none select-none">"</div>
              <blockquote className="font-korean text-white/85 leading-relaxed relative z-10 pt-4">
                이미지를 만드는 수준이 아니라,
                <br />
                <span className="text-gold">공간을 제안하는 수준으로.</span>
                <br />
                AI 툴은 많아졌지만, 실제 디자인에 어떻게 쓰는지를 가르칩니다.
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold/40" />
                <span className="font-korean text-gold/50 text-xs tracking-wider">크리AI티브 대표 김동섭</span>
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/@cri-ai-tive"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-korean text-white/65 text-xs border border-white/20
                           px-4 py-2 hover:border-gold/40 hover:text-white/85 transition-all"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                유튜브 채널
              </a>
              <a
                href="http://cri-ai-tive.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-korean text-white/65 text-xs border border-white/20
                           px-4 py-2 hover:border-gold/40 hover:text-white/85 transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
                웹사이트
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
