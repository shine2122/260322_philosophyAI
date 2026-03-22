import { useState } from 'react'
import { useGemini } from '../hooks/useGemini'
import type { SuggestedPrompt } from '../types'

const suggestedPrompts: SuggestedPrompt[] = [
  { id: '1', label: '모던 미니멀 거실', value: '모던 미니멀 거실, 화이트와 우드 톤, 자연광' },
  { id: '2', label: '북유럽 스타일 카페', value: '북유럽 스타일 카페 인테리어, 따뜻한 조명, 원목 가구' },
  { id: '3', label: '인더스트리얼 사무실', value: '산업 인더스트리얼 스타일 사무실, 노출 콘크리트, 철제 파이프' },
  { id: '4', label: '일본식 젠 정원', value: '일본식 젠 정원, 돌, 대나무, 모래 정원, 미니멀' },
  { id: '5', label: '럭셔리 펜트하우스', value: '럭셔리 펜트하우스 거실, 파노라마 뷰, 대리석 바닥' },
  { id: '6', label: '보헤미안 침실', value: '보헤미안 스타일 침실, 테라코타 색상, 패브릭 레이어링' },
]

export default function GeminiDemo() {
  const [apiKey, setApiKey] = useState('')
  const [prompt, setPrompt] = useState('')
  const [showApiKey, setShowApiKey] = useState(false)

  const { generateImage, imageData, isLoading, status, error, reset } = useGemini(apiKey)

  const handleGenerate = async () => {
    await generateImage(prompt)
  }

  const handlePromptChip = (value: string) => {
    setPrompt(value)
    if (status === 'error' || status === 'success') {
      reset()
    }
  }

  const handlePromptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value)
    if (status === 'error') reset()
  }

  const handleDownload = () => {
    if (!imageData) return
    const link = document.createElement('a')
    link.href = imageData
    link.download = `ai-space-${Date.now()}.png`
    link.click()
  }

  return (
    <section id="demo" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080c18] via-navy to-[#080c18]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Gold accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
                      rounded-full bg-gold/[0.04] blur-3xl pointer-events-none" />

      <div className="relative z-10 section-container">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <div className="gold-line-center" />
          <p className="section-tag mb-4">Live Demo</p>
          <h2 className="font-display-serif text-4xl md:text-5xl text-white mb-4">
            AI로 공간을
            <span className="text-gradient-gold italic"> 상상하다</span>
          </h2>
          <p className="font-korean text-white/40 max-w-lg mx-auto text-sm leading-relaxed">
            Gemini AI를 사용해 공간 이미지를 직접 생성해보세요.
            <br />
            원하는 공간을 텍스트로 묘사하면 AI가 이미지로 만들어드립니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-glass rounded-sm overflow-hidden">
            {/* Top bar */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-3 font-display-serif italic text-white/20 text-sm">
                Gemini Image Generation Studio
              </span>
            </div>

            <div className="p-6 md:p-8 space-y-6">
              {/* API Key input */}
              <div>
                <label className="block font-korean text-white/50 text-xs tracking-wider uppercase mb-2">
                  Gemini API Key
                  <span className="ml-2 text-white/30 normal-case">
                    (
                    <a
                      href="https://aistudio.google.com/app/apikey"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold/60 hover:text-gold transition-colors"
                    >
                      Google AI Studio
                    </a>
                    에서 발급)
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showApiKey ? 'text' : 'password'}
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="AIzaSy..."
                    className="w-full bg-white/[0.04] border border-white/10 text-white/80 font-korean text-sm
                               px-4 py-3 pr-12 focus:outline-none focus:border-gold/40 transition-colors
                               placeholder:text-white/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60
                               transition-colors p-1"
                    aria-label={showApiKey ? '키 숨기기' : '키 보기'}
                  >
                    {showApiKey ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                <p className="mt-1.5 font-korean text-white/20 text-xs">
                  API 키는 로컬에서만 사용되며 서버로 전송되지 않습니다.
                </p>
              </div>

              {/* Suggested prompts */}
              <div>
                <p className="font-korean text-white/40 text-xs tracking-wider uppercase mb-3">
                  추천 프롬프트
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedPrompts.map((sp) => (
                    <button
                      key={sp.id}
                      onClick={() => handlePromptChip(sp.value)}
                      className={`font-korean text-xs px-3 py-1.5 border transition-all duration-200
                                  ${prompt === sp.value
                          ? 'border-gold/60 text-gold bg-gold/10'
                          : 'border-white/10 text-white/50 hover:border-gold/30 hover:text-white/70'
                        }`}
                    >
                      {sp.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prompt textarea */}
              <div>
                <label className="block font-korean text-white/50 text-xs tracking-wider uppercase mb-2">
                  이미지 프롬프트
                </label>
                <textarea
                  value={prompt}
                  onChange={handlePromptChange}
                  placeholder="원하는 공간을 묘사해 주세요. 예: 창가에 아침 햇살이 비치는 미니멀 서재, 원목 책상, 흰 벽..."
                  rows={3}
                  className="w-full bg-white/[0.04] border border-white/10 text-white/80 font-korean text-sm
                             px-4 py-3 focus:outline-none focus:border-gold/40 transition-colors resize-none
                             placeholder:text-white/20 leading-relaxed"
                />
              </div>

              {/* Generate button */}
              <button
                onClick={handleGenerate}
                disabled={isLoading || !apiKey.trim() || !prompt.trim()}
                className="w-full btn-primary justify-center disabled:opacity-40 disabled:cursor-not-allowed
                           disabled:hover:shadow-none py-4"
              >
                {isLoading ? (
                  <>
                    <svg className="w-4 h-4 spinner" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>이미지 생성 중...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span>이미지 생성하기</span>
                  </>
                )}
              </button>

              {/* Error state */}
              {status === 'error' && error && (
                <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-sm">
                  <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-korean text-red-400 text-sm">{error}</p>
                    <button
                      onClick={reset}
                      className="font-korean text-red-400/60 text-xs mt-1 hover:text-red-400 transition-colors"
                    >
                      다시 시도
                    </button>
                  </div>
                </div>
              )}

              {/* Loading state visualization */}
              {isLoading && (
                <div className="relative overflow-hidden bg-white/[0.02] border border-white/[0.06] aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
                    {/* Animated rings */}
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping" style={{ animationDuration: '2s' }} />
                      <div className="absolute inset-2 rounded-full border border-gold/30 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
                      <div className="absolute inset-4 rounded-full border border-gold/40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gold/60 spinner" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="font-korean text-white/50 text-sm mb-1">AI가 공간을 상상하는 중...</p>
                      <p className="font-display-serif italic text-gold/40 text-xs tracking-wider">
                        Generating your space...
                      </p>
                    </div>

                    {/* Progress shimmer */}
                    <div className="w-full max-w-xs h-1 bg-white/[0.05] overflow-hidden rounded-full">
                      <div className="h-full bg-gradient-to-r from-transparent via-gold/60 to-transparent
                                      animate-shimmer bg-[length:200%_100%]" />
                    </div>
                  </div>
                </div>
              )}

              {/* Success — Generated image */}
              {status === 'success' && imageData && (
                <div className="space-y-4">
                  <div className="relative group overflow-hidden border border-white/[0.08]">
                    <img
                      src={imageData}
                      alt={prompt}
                      className="w-full h-auto max-h-[600px] object-contain bg-navy-dark"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100
                                    transition-opacity duration-300 flex items-center justify-center gap-4">
                      <button
                        onClick={handleDownload}
                        className="btn-primary text-xs py-2.5 px-5"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        이미지 저장
                      </button>
                      <button
                        onClick={reset}
                        className="btn-outline text-xs py-2.5 px-5"
                      >
                        새로 생성
                      </button>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400/80 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="font-korean text-white/50 text-xs leading-relaxed">{prompt}</p>
                      <p className="font-display-serif italic text-gold/40 text-xs mt-1 tracking-wider">
                        Generated by Gemini AI
                      </p>
                    </div>
                  </div>

                  {/* Action buttons (always visible on mobile) */}
                  <div className="flex gap-3 md:hidden">
                    <button onClick={handleDownload} className="btn-primary text-xs py-2.5 flex-1 justify-center">
                      이미지 저장
                    </button>
                    <button onClick={reset} className="btn-outline text-xs py-2.5 flex-1 justify-center">
                      새로 생성
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center font-korean text-white/20 text-xs mt-6 leading-relaxed">
            이 데모는 Google Gemini API를 사용합니다. API 키는 브라우저에서만 사용되며 저장되지 않습니다.
            <br />
            생성된 이미지는 Gemini AI의 창작물로, 상업적 사용 전 이용약관을 확인하세요.
          </p>
        </div>
      </div>
    </section>
  )
}
