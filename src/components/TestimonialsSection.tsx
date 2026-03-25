const testimonials = [
  {
    highlight: "이미지 생성이 아니라, 공간을 설계하는 방법을 배웠습니다.",
    body: "AI로 예쁜 이미지를 만드는 수준을 넘어 공간 콘셉트를 빠르게 정리하고 시각화하는 방법을 이해하게 되었습니다.",
    author: "김○○",
    role: "인테리어 디자이너",
  },
  {
    highlight: "클라이언트 제안 속도가 확실히 빨라졌습니다.",
    body: "예전에는 레퍼런스를 찾고 정리하는 데 시간이 많이 걸렸는데, 지금은 아이디어 스케치를 훨씬 빠르게 제안서로 발전시킬 수 있게 되었습니다.",
    author: "박○○",
    role: "실내건축 실무자",
  },
  {
    highlight: "막연했던 공간 아이디어가 구체적인 안으로 바뀌었습니다.",
    body: "머릿속에만 있던 공간 이미지가 설득력 있는 시안으로 정리되는 경험이 가장 인상 깊었습니다.",
    author: "이○○",
    role: "공간디자인 전공 학생",
  },
  {
    highlight: "툴을 배운 것이 아니라, 디자인 프로세스를 배운 느낌입니다.",
    body: "AI를 어떻게 쓰는지가 아니라 기획–콘셉트–시각화까지 연결하는 흐름을 이해하게 된 수업이었습니다.",
    author: "최○○",
    role: "인테리어 설계 담당자",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-navy to-[#080c18]" />

      <div className="relative z-10 section-container">
        <div className="text-center mb-16 reveal">
          <div className="gold-line-center" />
          <p className="section-tag mb-4">Testimonials</p>
          <h2 className="font-display-serif text-4xl md:text-5xl text-white">
            수강생 반응
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal card-glass p-8 relative border border-white/[0.07]"
              style={{
                background: 'rgba(201, 169, 110, 0.05)',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="absolute top-4 left-6 leading-none select-none text-gold"
                style={{ fontSize: '3rem', opacity: 0.4 }}
              >
                "
              </div>
              <div className="pt-8">
                <p className="font-korean text-base font-bold text-white/85 mb-4 leading-relaxed">
                  {t.highlight}
                </p>
                <p className="font-korean text-sm text-white/50" style={{ lineHeight: 1.85 }}>
                  {t.body}
                </p>
                <p className="font-korean mt-6 text-gold" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  — {t.author} · {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
