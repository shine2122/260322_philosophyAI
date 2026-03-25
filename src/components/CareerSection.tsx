const careerData = [
  {
    period: "2025  09월 (2주)",
    organization: "온라인 강좌 1기",
    title: "「AI를 활용한 이미지와 영상 제작 (입문 과정)」",
  },
  {
    period: "2025  10월 (2주)",
    organization: "온라인 강좌 2기",
    title: "「AI를 활용한 이미지와 영상 제작 (입문 과정)」",
  },
  {
    period: "2025  10.04",
    organization: "제2회 AI 세미나",
    title: "「나노바나나 시대에 ComfyUI는 여전히 필요한가?」",
  },
  {
    period: "2025  10.30",
    organization: "제3회 AI 세미나",
    title: "「AI 영상의 현재와 미래, 그리고 마이크로 스튜디오 시대」",
  },
  {
    period: "2025  12.13",
    organization: "컨퍼런스 개최",
    title: "AI Spark for 2026 (서울창조경제혁신센터, 100여명 참석)",
  },
  {
    period: "2026  01.13~01.15",
    organization: "경기대학교",
    title: "「AI 커리어 메이커 캠프」 운영 및 강의, 이미지 및 영상 제작",
  },
  {
    period: "2026  02.04",
    organization: "경기대학교",
    title: "「AI 교직원 직무 역량 강화」 운영 및 강의, 데이터 시각화",
  },
  {
    period: "2026  02.24",
    organization: "㈜앰앰",
    title: "공간디자인 업무 프로세스 향상을 위한 미드저니 실무 특강",
  },
  {
    period: "2026  1학기",
    organization: "서울예술대학교",
    title: "공간디자인 전공 대상 「AI 활용 공간디자인」 강의 진행 중",
  },
]

export default function CareerSection() {
  return (
    <section id="career" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c18] to-navy" />

      <div className="relative z-10 section-container">
        <div className="reveal">
          <div className="gold-line" />
          <p className="section-tag mb-4">Career</p>
          <h2 className="font-display-serif text-4xl md:text-5xl text-white mb-16">
            최근 AI 강의 경력
          </h2>
        </div>

        <div className="space-y-0 reveal" style={{ transitionDelay: '0.1s' }}>
          {careerData.map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:grid md:grid-cols-[220px_200px_1fr] gap-1 md:gap-4 py-5 border-b border-white/[0.06]"
            >
              <span className="font-korean text-gold/70 text-sm whitespace-pre">{item.period}</span>
              <span className="font-korean text-white/80 text-sm">{item.organization}</span>
              <span className="font-korean text-white/50 text-sm leading-relaxed">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
