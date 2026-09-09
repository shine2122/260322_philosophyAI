export default function Hero() {
  const applicationUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdGYLP-u0vmBn_JbJVsUlfHKd807pcu4KwjkEJuTbrf0tUbAA/viewform?usp=publish-editor'
  const courseUrl = 'https://maddening-soccer-338.notion.site/ChatGPT-AI-3264fca4d3fd80fdbdace63a0a280a14'
  const videoCourseUrl = 'https://app.notion.com/p/AI-3be4fca4d3fd804780bffe72aa947b8e'
  const videoCourseApplicationUrl = 'https://forms.gle/CEQ4SuDKbgNHyPg37'

  return (
    <section id="top" className="relative min-h-[760px] overflow-hidden bg-navy text-white lg:min-h-screen">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.45) 1px, transparent 1px)',
          backgroundSize: 'clamp(52px, 6vw, 92px) clamp(52px, 6vw, 92px)',
        }}
      />
      <div className="absolute -right-[12vw] top-[12vh] h-[55vw] max-h-[760px] w-[55vw] max-w-[760px] rounded-full border border-gold/30" />
      <div className="absolute -right-[4vw] top-[20vh] h-[38vw] max-h-[530px] w-[38vw] max-w-[530px] rounded-full bg-gold opacity-90 blur-[1px]" />
      <div className="absolute right-[7vw] top-[30vh] h-[22vw] max-h-[310px] w-[22vw] max-w-[310px] rounded-full bg-navy" />
      <p className="pointer-events-none absolute -right-5 bottom-[18%] hidden font-display text-[18vw] italic leading-none text-white/[0.035] lg:block">
        space
      </p>

      <div className="section-container relative z-10 flex min-h-[760px] flex-col justify-end pb-10 pt-36 lg:min-h-screen lg:pb-12">
        <div className="flex items-center justify-between border-t border-white/25 pt-4 text-white/60">
          <p className="eyebrow">AI Spatial Design & Education</p>
          <p className="hidden text-sm md:block">Seoul · Korea</p>
        </div>

        <div className="mb-auto mt-7 grid w-full gap-4 xl:grid-cols-2">
          <aside className="relative overflow-hidden rounded-3xl border border-[#4CC8EA]/55 bg-gradient-to-r from-[#062334]/95 to-navy-light/95 p-5 shadow-[0_0_55px_rgba(76,200,234,0.12),0_20px_70px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:p-7">
            <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-[#4CC8EA]/10 blur-3xl" />
            <div className="relative flex h-full flex-col gap-5">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="relative inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy ring-4 ring-gold/15 shadow-[0_0_18px_rgba(245,216,110,0.75),0_0_48px_rgba(245,216,110,0.32)]">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
                    </span>
                    현재 모집 중
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#4CC8EA]">New Class · 2026. 09. 21 Start</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">공간 주제 AI 영상 자동화 실전 클래스 (3기)</h2>
                <p className="mt-2 text-base font-semibold text-gold">꿈꾸던 공간에 나의 이야기를 입히다.</p>
                <p className="mt-1 text-base text-white/75">집·매장·업무 공간을 나만의 이야기로 영상화합니다.</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-base leading-7 text-white/80">
                  <span>9월 21일(월) · 9월 22일(화)</span>
                  <span>2회 · 총 4시간</span>
                  <span>100% 실시간 Google Meet</span>
                  <span>총 60,000원</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-base text-white/75">
                  <span>+ GPT-6 Astra·Codex·Blender 3D</span>
                  <span>+ Higgsfield Seedance 2.5·Kling 3.0</span>
                  <span>+ 한국어 음성·자연스러운 립싱크·소수정예</span>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                <a href={videoCourseApplicationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-12 shrink-0 justify-center px-6">
                  바로 신청하기 <span aria-hidden="true">↗</span>
                </a>
                <a href={videoCourseUrl} target="_blank" rel="noopener noreferrer" className="btn-outline min-h-12 shrink-0 justify-center px-6">
                  상세 과정 보기 <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </aside>

          <aside className="rounded-3xl border border-gold/30 bg-navy-light/90 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-7">
          <div className="flex h-full flex-col gap-5">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="relative inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy ring-4 ring-gold/15 shadow-[0_0_18px_rgba(245,216,110,0.75),0_0_48px_rgba(245,216,110,0.32)]">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
                  </span>
                  현재 모집 중
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">Live Lab 1기 · 2026. 09. 30 Start</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">미드저니 & ChatGPT AI 공간디자인</h2>
              <p className="mt-2 text-base font-medium text-gold">Midjourney × ChatGPT Image로 나만의 공간 프로젝트 완성하기</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-base leading-7 text-white/75">
                <span>5회 · 총 10시간</span>
                <span>100% 실시간 Google Meet</span>
                <span>149,000원</span>
              </div>
              <p className="mt-2 text-base text-white/75">9월 30일~10월 28일 · 매주 수요일 · 소수정예 실시간 온라인 · 전 회차 녹화 제공</p>
            </div>
            <div className="mt-auto flex flex-wrap gap-3">
              <a href={applicationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-12 shrink-0 justify-center px-6">
                바로 신청하기 <span aria-hidden="true">↗</span>
              </a>
              <a href={courseUrl} target="_blank" rel="noopener noreferrer" className="btn-outline min-h-12 shrink-0 justify-center px-6">
                상세 과정 보기 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          </aside>
        </div>

        <div className="mt-14 max-w-6xl sm:mt-16 lg:mt-20">
          <p className="mb-6 font-display text-2xl italic text-gold sm:text-3xl">Beyond beautiful images.</p>
          <h1 className="balance font-korean text-[clamp(3.2rem,8.4vw,8.8rem)] font-semibold leading-[0.98] tracking-[-0.075em] text-white">
            공간을 상상하고,<br />AI로 설계합니다.
          </h1>

          <div className="mt-9 grid gap-8 border-t border-white/25 pt-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-base font-light leading-7 text-white/70 md:text-lg">
              공간디자인 박사 김동섭의 시선으로 생성형 AI를 실제 디자인 프로세스에 연결합니다.
              이미지 한 장을 넘어, 설득력 있는 공간 제안까지.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                교육 프로그램 <span aria-hidden="true">↓</span>
              </button>
              <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                포트폴리오
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-4 text-sm uppercase tracking-[0.16em] text-white/55">
          <span>Ph.D. in Spatial Design</span>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

