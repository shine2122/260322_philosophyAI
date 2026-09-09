const spatialCourseUrl = 'https://maddening-soccer-338.notion.site/ChatGPT-AI-3264fca4d3fd80fdbdace63a0a280a14'
const videoCourseUrl = 'https://app.notion.com/p/AI-3be4fca4d3fd804780bffe72aa947b8e'
const brandingCourseUrl = 'https://app.notion.com/p/3b24fca4d3fd81a8a6c7d2712aa1729b'
const automationCourseUrl = 'https://app.notion.com/p/3b44fca4d3fd81c59ecfdbe8a971fbf4'
const spatialCourseApplicationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdGYLP-u0vmBn_JbJVsUlfHKd807pcu4KwjkEJuTbrf0tUbAA/viewform?usp=publish-editor'
const videoCourseApplicationUrl = 'https://forms.gle/CEQ4SuDKbgNHyPg37'

interface Service {
  number: string
  title: string
  english: string
  description: string
  features: string[]
  duration?: string
  price?: string
  delivery?: string
  detailUrl?: string
}

const services: Service[] = [
  {
    number: '01',
    title: '미드저니 & ChatGPT AI 공간디자인',
    english: 'Live Lab 1기 · AI Spatial Design',
    description: '5주 동안 매주 실시간으로 만나 직접 공간을 만들고 피드백을 받으며, 나만의 AI 공간디자인 프로젝트를 완성하는 소수정예 실습 과정입니다.',
    features: ['100% 실시간 온라인', 'Google Meet 참여형 수업', '작업 리뷰·피드백', '전 회차 녹화 제공'],
    duration: '5회 · 총 10시간',
    price: '수강료 149,000원',
    delivery: '매주 수요일 · 회당 2시간 · 100% 실시간 Google Meet',
    detailUrl: spatialCourseUrl,
  },
  {
    number: '02',
    title: 'AI 기반 공간디자인 자동화 실무',
    english: 'AI Spatial Design Automation · 5 Weeks',
    description: '크리AI티브.SD의 실제 공간디자인 자동화 기술과 단계별 작업 체계를 수업에 적용해, 실무 평면부터 설계·3D·시각화·제안서까지 완성합니다.',
    features: ['크리AI티브.SD 워크플로우', 'SVG·FreeCAD 설계', 'Blender 3D 모델', 'ImageGen 시각화·제안서'],
    duration: '5회 · 총 10시간',
    price: '회당 40,000원 · 총 200,000원',
    delivery: '1~5주 모두 실시간 온라인 강좌',
    detailUrl: automationCourseUrl,
  },
  {
    number: '03',
    title: '공간 주제 AI 영상자동화 실전 클래스',
    english: 'Spatial Theme · AI Video Automation',
    description: '살고 싶은 집, 운영하고 싶은 매장과 일하고 싶은 업무 공간에 나의 이야기를 입혀 영상으로 완성하는 실전 과정입니다.',
    features: ['GPT-6 Astra·Codex·Blender 3D', 'Higgsfield Seedance 2.5·Kling 3.0', 'Supertone 한국어 음성', '자연스러운 립싱크·소수정예'],
    duration: '2회 × 2시간 · 총 4시간',
    price: '수강료 총 60,000원',
    delivery: '9월 21일(월) · 9월 22일(화) · 오후 8~10시 · 소수정예',
    detailUrl: videoCourseUrl,
  },
  {
    number: '04',
    title: '공간디자이너를 위한 AI 기반 브랜딩',
    english: 'AI Branding for Spatial Designers',
    description: '공간디자인 프로젝트와 전문성을 브랜드 관점에서 정리하고, AI를 활용해 포트폴리오·브랜드 웹페이지·공간 프로젝트 소개 영상까지 완성합니다.',
    features: ['공간디자인 포지셔닝', 'Notion 공간 포트폴리오', '브랜드 랜딩페이지', '공간 프로젝트 소개 영상'],
    duration: '4회 · 총 8시간',
    price: '회당 40,000원 · 총 160,000원',
    detailUrl: brandingCourseUrl,
  },
  {
    number: '05',
    title: '1:1 AI 컨설팅',
    english: 'Private Consulting',
    description: '현재의 디자인 프로세스를 진단하고, 개인 또는 조직에 맞는 AI 도구와 워크플로우를 함께 구축합니다.',
    features: ['프로세스 진단', '도구 선정·세팅', '맞춤 워크플로우', '후속 피드백'],
    duration: '개인·기업 맞춤 진행',
  },
]

const automationCourseWeeks = [
  { number: '01', format: '실시간 온라인', title: '실무 평면 단순화와 SVG 공간 기획', description: '복잡한 실무 평면을 정리하고 축척을 교정해 기획용 empty SVG와 최종 SVG 평면을 확정합니다.' },
  { number: '02', format: '실시간 온라인', title: '무드보드와 FreeCAD 설계 도면', description: '재료·조명·집기 계획을 세우고 평면도, 내부 입면도 4장과 천장도를 발행합니다.' },
  { number: '03', format: '실시간 온라인', title: 'Blender 3D 모델링과 기준 장면', description: 'FreeCAD 모델을 인계해 재료와 조명을 보완하고 아이소메트릭·파사드·실내 기준 장면을 만듭니다.' },
  { number: '04', format: '실시간 온라인', title: 'ImageGen 공간 시각화', description: '구조와 카메라를 유지하며 아이소메트릭 1장, 파사드 1장과 실내 투시도 2장을 완성합니다.' },
  { number: '05', format: '실시간 온라인', title: '최종 교정과 제안서 완성', description: '변경사항을 도면에 반영하고 기획·도면·3D·시각화 결과를 공간디자인 제안서로 구성합니다.' },
]

const spatialCourseWeeks = [
  { number: '01', date: '9월 30일(수)', format: '실시간 온라인', title: 'AI 공간디자인 시작하기', description: 'Midjourney와 ChatGPT Image를 활용해 공간 콘셉트를 정하고 첫 이미지를 직접 생성합니다.' },
  { number: '02', date: '10월 7일(수)', format: '실시간 온라인', title: '기존 공간 AI 리노베이션', description: '실제 공간 이미지를 바탕으로 스타일, 재료와 분위기를 변경하는 리노베이션을 실습합니다.' },
  { number: '03', date: '10월 14일(수)', format: '실시간 온라인', title: 'AI 공간 이미지 발전시키기', description: '구도, 재료, 가구와 조명을 조절하고 실시간 피드백으로 원하는 디자인까지 발전시킵니다.' },
  { number: '04', date: '10월 21일(수)', format: '실시간 온라인', title: '공간디자인 제안 이미지 만들기', description: 'Before & After, 여러 시안과 공간 콘셉트 이미지를 구성해 설득력 있는 제안 자료를 만듭니다.' },
  { number: '05', date: '10월 28일(수)', format: '실시간 온라인', title: '나만의 AI 공간디자인 프로젝트 완성', description: '참가자의 결과물을 함께 리뷰하고 피드백과 수정을 거쳐 최종 프로젝트를 완성합니다.' },
]

const videoCourseSessions = [
  {
    number: '01',
    date: '9월 21일(월)',
    format: '실시간 온라인',
    title: '기획·스토리보드와 자동화 원리',
    description: '아이디어와 스토리보드를 구성하고 자동화의 단계별 원리를 이해해, 자신만의 동영상 제작 프로세스를 설계합니다. 원본 선명도 복원과 다양한 4K 업스케일 방법도 비교합니다.',
  },
  {
    number: '02',
    date: '9월 22일(화)',
    format: '실시간 온라인',
    title: '영상 생성·한국어 음성·립싱크',
    description: 'Blender 3D로 공간과 카메라를 설계하고, Higgsfield Seedance 2.5 또는 Kling 3.0으로 영상을 생성합니다. Codex 자동화와 Supertone 한국어 음성·자연스러운 립싱크까지 연결합니다.',
  },
]

const brandingCourseSessions = [
  {
    number: '01',
    title: '브랜드 전략과 공간 콘셉트 시각화',
    description: '전문 분야, 대표 프로젝트와 디자인 철학을 정리하고 AI로 브랜드를 대표할 공간 콘셉트를 시각화합니다.',
  },
  {
    number: '02',
    title: 'Notion 공간디자인 포트폴리오',
    description: '도면·공간 이미지·재료·조명과 디자인 과정을 프로젝트별로 구조화해 공개 가능한 포트폴리오를 만듭니다.',
  },
  {
    number: '03',
    title: '공간디자이너 브랜드 랜딩페이지',
    description: '소개, 대표 프로젝트, 서비스와 문의 흐름을 설계하고 브랜드 문장과 공간 이미지를 반영한 웹페이지를 완성합니다.',
  },
  {
    number: '04',
    title: '공간 프로젝트 소개 영상',
    description: '프로젝트의 문제·콘셉트·디자인 과정·결과를 짧은 스토리로 구성해 소개 영상과 최종 브랜드 패키지를 완성합니다.',
  },
]

interface ServicesProps {
  onOpenModal: () => void
}

export default function Services({ onOpenModal }: ServicesProps) {
  return (
    <section id="services" className="bg-navy py-24 text-white sm:py-32 lg:py-40">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-2">
            <p className="eyebrow text-white/40">02 · Programs</p>
          </div>
          <div className="reveal lg:col-span-7">
            <p className="font-display text-3xl italic text-gold sm:text-4xl">From image to proposal.</p>
            <h2 className="balance mt-5 font-korean text-4xl font-semibold leading-[1.14] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
              결과물보다 중요한 건,<br />생각하는 과정입니다.
            </h2>
          </div>
          <p className="reveal self-end text-base font-light leading-8 text-white/70 lg:col-span-3">
            정규 과정부터 기업·대학 교육과 1:1 컨설팅까지 목적에 맞는 학습 경험을 설계합니다.
          </p>
        </div>

        <div className="mt-16 border-t border-white/20 lg:ml-[16.66%]">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="reveal group grid gap-6 border-b border-white/15 py-9 transition-colors hover:bg-white/[0.025] sm:py-12 lg:grid-cols-[100px_1.05fr_1fr_auto] lg:items-start lg:gap-8"
              style={{ transitionDelay: `${index * 0.07}s` }}
            >
              <span className="font-display text-3xl italic text-gold">{service.number}</span>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm uppercase tracking-[0.16em] text-white/60">{service.english}</p>
                  {(service.number === '01' || service.number === '03') && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-sm font-semibold text-navy shadow-[0_0_24px_rgba(245,216,110,0.28)]">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" /> 현재 모집 중
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-xl font-semibold leading-snug tracking-[-0.04em] sm:text-2xl">{service.title}</h3>
                {service.duration && <p className="mt-4 text-base font-medium text-gold">{service.duration}</p>}
                {service.price && <p className="mt-1 text-base text-white/75">{service.price}</p>}
                {service.delivery && <p className="mt-1 text-base text-white/70">{service.delivery}</p>}
              </div>
              <div>
                <p className="text-base font-light leading-8 text-white/70">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="text-base text-white/70">+ {feature}</span>
                  ))}
                </div>
              </div>
              {service.detailUrl ? (
                <a
                  href={service.detailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-navy"
                  aria-label={`${service.title} 상세 페이지 열기`}
                >
                  ↗
                </a>
              ) : (
                <button
                  onClick={onOpenModal}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-all group-hover:border-gold group-hover:bg-gold group-hover:text-navy"
                  aria-label={`${service.title} 문의하기`}
                >
                  ↗
                </button>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:ml-[16.66%] xl:grid-cols-2">
          <article className="reveal order-2 rounded-3xl border border-[#4CC8EA]/45 bg-[#4CC8EA]/[0.06] p-7 sm:p-9">
            <div className="border-b border-white/15 pb-7">
              <div>
                <p className="eyebrow text-[#4CC8EA]">5 Sessions · 10 Hours</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.04em]">AI 기반 공간디자인 자동화 실무</h3>
                <p className="mt-4 text-base font-medium text-gold">회당 40,000원 · 총 200,000원</p>
                <p className="mt-4 text-base font-light leading-8 text-white/70">
                  크리AI티브.SD의 자동화 기술을 활용해 실무 평면 정리부터 FreeCAD·Blender·ImageGen 시각화와 최종 제안서까지 하나의 프로젝트로 완성합니다.
                </p>
              </div>
              <a
                href={automationCourseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 shrink-0 items-center rounded-full border border-[#4CC8EA]/60 px-5 text-base font-semibold text-[#4CC8EA] transition-colors hover:bg-[#4CC8EA] hover:text-navy"
              >
                상세 과정 보기 ↗
              </a>
            </div>
            <ol className="mt-2">
              {automationCourseWeeks.map((week) => (
                <li
                  key={week.number}
                  className="grid grid-cols-[44px_1fr] gap-4 border-b border-white/10 py-5 last:border-b-0"
                >
                  <span className="font-display text-2xl italic text-[#4CC8EA]">{week.number}</span>
                  <div>
                    <span className="inline-flex rounded-full border border-[#4CC8EA]/45 px-2.5 py-1 text-sm font-semibold text-[#4CC8EA]">{week.format}</span>
                    <p className="mt-2 text-lg font-semibold">{week.title}</p>
                    <p className="mt-2 text-base font-light leading-8 text-white/70">{week.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="reveal relative order-1 overflow-hidden rounded-3xl border border-gold/70 bg-gradient-to-b from-gold/[0.11] to-gold/[0.035] p-7 shadow-[0_0_70px_rgba(245,216,110,0.09)] sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative mb-5 flex items-center justify-between gap-4 border-b border-gold/25 pb-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-base font-bold text-navy shadow-[0_0_32px_rgba(245,216,110,0.35)]">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" /> 현재 모집 중
              </span>
              <span className="text-sm font-semibold tracking-[0.08em] text-gold">LIVE LAB 1기</span>
            </div>
            <div className="border-b border-white/15 pb-7">
              <div>
                <p className="eyebrow text-gold">5 Sessions · 10 Hours</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.04em]">미드저니 & ChatGPT AI 공간디자인</h3>
                <p className="mt-2 text-base font-medium text-white/85">Midjourney × ChatGPT Image로 나만의 공간 프로젝트 완성하기</p>
                <p className="mt-4 text-base font-medium text-gold">5회 · 총 10시간 · 수강료 149,000원</p>
                <p className="mt-4 text-base font-light leading-8 text-white/70">
                  5주 동안 매주 실시간으로 만나 직접 공간을 만들고 피드백을 받으며, 나만의 AI 공간디자인 프로젝트를 완성하는 소수정예 실습 과정입니다.
                </p>
                <div className="mt-5 rounded-2xl border border-gold/60 bg-gold/[0.14] p-5 text-base leading-8 text-white/85 shadow-[inset_4px_0_0_#f5d86e]">
                  <p className="text-lg font-bold text-gold">9월 30일 개강 · 매주 수요일</p>
                  <p>100% 실시간 Google Meet · 회당 2시간</p>
                  <p>전 회차 녹화 제공 · 복습용 다시보기</p>
                  <p className="mt-3 font-semibold text-white">직접 만들고, 함께 보고, 피드백으로 완성합니다.</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={spatialCourseApplicationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-11 px-5">바로 신청하기 ↗</a>
                <a href={spatialCourseUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-5 text-base font-semibold text-gold transition-colors hover:bg-gold hover:text-navy">
                  상세 과정 보기 ↗
                </a>
              </div>
            </div>
            <ol className="mt-2">
              {spatialCourseWeeks.map((week) => (
                <li key={week.number} className="grid grid-cols-[38px_1fr] gap-4 border-b border-white/10 py-5 last:border-b-0">
                  <span className="font-display text-xl italic text-gold">{week.number}</span>
                  <div>
                    <span className="inline-flex rounded-full border border-gold/40 px-2.5 py-1 text-sm font-semibold text-gold">{week.format}</span>
                    <span className="ml-2 text-sm font-semibold text-white/75">{week.date}</span>
                    <p className="mt-1 text-base font-semibold">{week.title}</p>
                    <p className="mt-1 text-base font-light leading-8 text-white/70">{week.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="reveal order-3 rounded-3xl border border-[#00AFA0]/35 bg-[#00AFA0]/[0.055] p-7 sm:p-9" style={{ transitionDelay: '0.08s' }}>
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-[#4CC8EA]/20 pb-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-base font-bold text-navy ring-4 ring-gold/15 shadow-[0_0_18px_rgba(245,216,110,0.65),0_0_42px_rgba(245,216,110,0.25)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
                </span>
                현재 모집 중
              </span>
              <span className="text-sm font-semibold tracking-[0.08em] text-[#4CC8EA]">NEW CLASS</span>
            </div>
            <div className="border-b border-white/15 pb-7">
              <p className="eyebrow text-[#35B7DD]">2 Sessions · 4 Hours</p>
              <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.04em]">공간 주제 AI 영상자동화 실전 클래스 (3기)</h3>
              <p className="mt-3 text-lg font-semibold text-[#4CC8EA]">꿈꾸던 공간에 나의 이야기를 입히다.</p>
              <p className="mt-4 text-base font-medium text-gold">수강료 총 60,000원</p>
              <p className="mt-4 text-base font-light leading-8 text-white/70">
                단순 도구 사용법이 아니라 AI 영상 자동화의 원리를 이해하고, 자신의 목적과 작업 방식에 맞는 제작 프로세스를 직접 설계하는 실전 클래스입니다.
              </p>
              <div className="mt-5 rounded-2xl border border-[#4CC8EA]/40 bg-[#4CC8EA]/[0.07] p-5 text-base leading-8 text-white/80">
                <p className="font-semibold text-[#4CC8EA]">이 클래스만의 차별화 포인트</p>
                <p>01 · 자동화 원리 기반의 나만의 영상 제작 프로세스 설계</p>
                <p>02 · 원본 선명도 복원과 다양한 4K 업스케일 방법</p>
                <p>03 · Supertone 한국어 음성 제작과 자연스러운 립싱크</p>
              </div>
              <p className="mt-2 text-base text-white/70">외부 도구 구독료 별도</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={videoCourseApplicationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-11 px-5">
                  바로 신청하기 ↗
                </a>
                <a
                  href={videoCourseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-[#00AFA0]/60 px-5 text-base font-semibold text-[#4CC8EA] transition-colors hover:bg-[#00AFA0] hover:text-navy"
                >
                  상세 과정 보기 ↗
                </a>
              </div>
            </div>
            <ol className="mt-2">
              {videoCourseSessions.map((session) => (
                <li key={session.number} className="grid grid-cols-[38px_1fr] gap-4 border-b border-white/10 py-6 last:border-b-0">
                  <span className="font-display text-xl italic text-[#35B7DD]">{session.number}</span>
                  <div>
                    <span className="inline-flex rounded-full border border-[#00AFA0]/50 px-2.5 py-1 text-sm font-semibold text-[#4CC8EA]">{session.format}</span>
                    <span className="ml-2 text-sm font-semibold text-white/75">{session.date}</span>
                    <p className="mt-1 text-base font-semibold">{session.title}</p>
                    <p className="mt-2 text-base font-light leading-8 text-white/70">{session.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="reveal order-4 rounded-3xl border border-white/20 bg-white/[0.045] p-7 sm:p-9" style={{ transitionDelay: '0.12s' }}>
            <div className="border-b border-white/15 pb-7">
              <div>
                <p className="eyebrow text-[#4CC8EA]">4 Sessions · 8 Hours</p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.04em]">공간디자이너를 위한 AI 기반 브랜딩</h3>
                <p className="mt-4 text-base font-medium text-gold">회당 40,000원 · 총 160,000원</p>
                <p className="mt-4 text-base font-light leading-8 text-white/70">
                  공간디자이너의 전문성과 프로젝트를 하나의 브랜드 언어로 정리하고, 포트폴리오·랜딩페이지·소개 영상까지 연결하는 결과물 중심 과정입니다.
                </p>
              </div>
              <a
                href={brandingCourseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 shrink-0 items-center rounded-full border border-white/30 px-5 text-base font-semibold text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy"
              >
                상세 과정 보기 ↗
              </a>
            </div>
            <ol className="mt-2">
              {brandingCourseSessions.map((session) => (
                <li
                  key={session.number}
                  className="grid grid-cols-[44px_1fr] gap-4 border-b border-white/10 py-6 last:border-b-0"
                >
                  <span className="font-display text-2xl italic text-gold">{session.number}</span>
                  <div>
                    <p className="text-lg font-semibold">{session.title}</p>
                    <p className="mt-2 text-base font-light leading-8 text-white/70">{session.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </div>

        <div className="reveal mt-12 flex flex-col gap-6 rounded-3xl bg-gold p-7 text-navy sm:p-10 lg:ml-[16.66%] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow text-navy/55">Custom Education & Consulting</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">기업·대학 맞춤 강의와 1:1 컨설팅 문의를 받고 있습니다.</h3>
          </div>
          <button onClick={onOpenModal} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-navy px-6 text-base font-semibold text-white">
            일정 문의하기
          </button>
        </div>
      </div>
    </section>
  )
}

