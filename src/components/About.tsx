const skills = [
  'AI 이미지 생성',
  'AI 영상 제작',
  '공간디자인',
  'Midjourney',
  'Stable Diffusion',
  'DALL-E 3',
  'Sora',
  'Runway Gen-3',
  '인테리어 렌더링',
  'ControlNet',
]

const stats = [
  { value: '500+', label: '수강생' },
  { value: '3년+', label: '강의 경력' },
  { value: '50+', label: '기업 강의' },
  { value: '98%', label: '수강생 만족도' },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0b0f1c] to-navy" />

      <div className="relative z-10 section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="reveal">
            <div className="gold-line" />
            <p className="section-tag mb-4">About</p>
            <h2 className="font-display-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
              디자인으로 AI를
              <br />
              <span className="text-gradient-gold italic">가르치는 사람</span>
            </h2>

            <div className="space-y-5 font-korean text-white/60 leading-relaxed">
              <p>
                공간디자인(인테리어/건축) 전공 백그라운드를 바탕으로, AI 이미지 생성과
                AI 영상 제작을 가르치는 전문 강사입니다.
              </p>
              <p>
                단순히 도구를 알려주는 것이 아닌, <span className="text-gold/80">디자인 감수성과 기술 이해를 결합한</span> 독자적인
                교육 방식으로 수강생들에게 실무 중심의 AI 활용법을 전달합니다.
              </p>
              <p>
                공간을 이해하는 눈으로 AI를 바라볼 때, 비로소 아름다운 결과물이 탄생합니다.
                그 경험을 함께 나누고 싶습니다.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-10">
              <p className="font-korean text-white/30 text-xs tracking-widest uppercase mb-4">전문 분야</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-korean text-xs px-3 py-1.5 border border-gold/20 text-gold/70
                               hover:border-gold/50 hover:text-gold transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats + Visual */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-white/[0.05] mb-8">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-navy p-8 text-center hover:bg-white/[0.03] transition-colors"
                >
                  <div className="font-display-serif text-4xl text-gold mb-2">{stat.value}</div>
                  <div className="font-korean text-white/40 text-xs tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quote card */}
            <div className="card-glass p-8 relative">
              <div className="absolute top-4 left-6 font-display-serif text-6xl text-gold/10 leading-none select-none">"</div>
              <blockquote className="font-korean text-white/70 leading-relaxed relative z-10 pt-4">
                공간을 설계할 때와 마찬가지로, AI 프롬프트도 목적과 맥락, 그리고 미적 감각이
                필요합니다. 저는 그 연결고리를 가르칩니다.
              </blockquote>
              <div className="mt-4 flex items-center gap-3">
                <span className="w-8 h-px bg-gold/40" />
                <span className="font-korean text-gold/50 text-xs tracking-wider">AI SPACE 대표</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
