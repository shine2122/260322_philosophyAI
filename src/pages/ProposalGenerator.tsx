import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProposalGenerator } from '../hooks/useProposalGenerator'
import type { ProposalSection } from '../hooks/useProposalGenerator'

const EXAMPLE_TEMPLATE = `# AI 공간디자인 강의 제안서

## 제안 배경
AI 기술의 발전으로 공간디자인 분야에서도 AI 도구 활용이 필수가 되었습니다.

## 과정 개요
- 과정명: AI 공간디자인 실무 과정
- 기간: 5주 (총 10시간)
- 대상: 인테리어/건축 디자이너, 학생

## 커리큘럼
### 1주차: AI 도구 이해
- Midjourney 기본 사용법
- 이미지 생성 원리

### 2주차: 실무 적용
- 인테리어 렌더링 제작
- 스타일 제어 방법

## 기대 효과
- 업무 생산성 50% 향상
- 포트폴리오 퀄리티 개선

## 수강료 및 신청
- 수강료: 18만원
- 신청: 이메일 또는 폼 작성`

const statusMessages: Record<string, string> = {
  analyzing: '양식 구조를 분석하는 중...',
  generating: 'AI가 제안서 내용을 작성하는 중...',
  generating_images: 'AI가 이미지를 생성하는 중...',
  done: '완료',
}

function SectionCard({ section, index }: { section: ProposalSection; index: number }) {
  const contentLines = section.content.split('\n').filter(l => l.trim())

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      {/* Section image */}
      {section.imageData && (
        <img
          src={section.imageData}
          alt={section.title}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="p-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center font-medium flex-shrink-0">
            {index + 1}
          </span>
          <h3 className="font-semibold text-gray-900 text-lg">{section.title}</h3>
        </div>

        {/* Section content */}
        <div className="prose prose-sm max-w-none text-gray-700 space-y-2">
          {contentLines.map((line, i) => {
            // Subheading
            if (line.startsWith('### ')) {
              return <h4 key={i} className="font-semibold text-gray-800 text-base mt-4 mb-1">{line.replace('### ', '')}</h4>
            }
            if (line.startsWith('## ')) {
              return <h3 key={i} className="font-semibold text-gray-800 text-lg mt-4 mb-1">{line.replace('## ', '')}</h3>
            }
            // List item
            if (line.startsWith('- ') || line.startsWith('* ')) {
              return (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 flex-shrink-0 mt-2" />
                  <span>{line.replace(/^[-*]\s+/, '').replace(/\*\*(.+?)\*\*/g, '$1')}</span>
                </div>
              )
            }
            // Bold text
            if (line.includes('**')) {
              const parts = line.split(/\*\*(.+?)\*\*/)
              return (
                <p key={i} className="text-gray-700">
                  {parts.map((part, j) => j % 2 === 1 ? <strong key={j}>{part}</strong> : part)}
                </p>
              )
            }
            // Regular paragraph
            if (line.trim()) {
              return <p key={i} className="text-gray-700">{line}</p>
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}

export default function ProposalGenerator() {
  const navigate = useNavigate()
  const [apiKey, setApiKey] = useState('')
  const [showApiKey, setShowApiKey] = useState(false)
  const [template, setTemplate] = useState('')
  const [topic, setTopic] = useState('')
  const [generateImages, setGenerateImages] = useState(true)
  const [showExample, setShowExample] = useState(false)
  const printRef = useRef<HTMLDivElement>(null)

  const { generate, proposal, status, progress, error, reset } = useProposalGenerator(apiKey)

  const isLoading = ['analyzing', 'generating', 'generating_images'].includes(status)

  const handleGenerate = () => {
    generate(template, topic, generateImages)
  }

  const handleCopyText = () => {
    if (proposal) {
      navigator.clipboard.writeText(proposal.rawText)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav */}
      <header className="bg-navy border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="text-white/50 hover:text-white transition-colors flex items-center gap-2 font-korean text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              포트폴리오로
            </button>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-korean text-white font-medium">AI 제안서 생성기</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-korean text-white/30 text-xs hidden sm:block">
              by 크리AI티브
            </span>
            <span className="font-display-serif text-gold text-sm italic">CRI.AI.TIVE</span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Input Panel */}
          <div className="space-y-6">
            <div>
              <h1 className="font-korean font-semibold text-gray-900 text-2xl mb-1">
                AI 제안서 생성기
              </h1>
              <p className="font-korean text-gray-500 text-sm">
                기존 제안서 양식을 업로드하면 새로운 주제의 제안서를 자동으로 생성합니다.
              </p>
            </div>

            {/* API Key */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <label className="block font-korean text-gray-700 text-sm font-medium mb-2">
                Gemini API Key
                <a
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-amber-600 hover:text-amber-700 font-normal text-xs"
                >
                  발급받기 →
                </a>
              </label>
              <div className="relative">
                <input
                  type={showApiKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full border border-gray-200 rounded-md px-3 py-2.5 pr-10 text-sm
                             font-mono focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400
                             text-gray-800 placeholder:text-gray-300"
                />
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showApiKey ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
              <p className="mt-1.5 text-gray-400 text-xs font-korean">
                API 키는 브라우저에만 사용되며 서버로 전송되지 않습니다.
              </p>
            </div>

            {/* Template input */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-2">
                <label className="font-korean text-gray-700 text-sm font-medium">
                  제안서 양식 (템플릿)
                </label>
                <button
                  type="button"
                  onClick={() => {
                    setShowExample(!showExample)
                    if (!showExample) setTemplate(EXAMPLE_TEMPLATE)
                  }}
                  className="font-korean text-amber-600 text-xs hover:text-amber-700"
                >
                  {showExample ? '양식 지우기' : '예시 양식 불러오기'}
                </button>
              </div>
              <textarea
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                placeholder="여기에 기존 제안서 양식을 붙여넣으세요. (마크다운 또는 일반 텍스트 모두 가능)"
                rows={12}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm font-mono
                           focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400
                           text-gray-800 placeholder:text-gray-300 resize-y"
              />
              <p className="mt-1.5 text-gray-400 text-xs font-korean">
                {template.length}자 입력됨
              </p>
            </div>

            {/* New proposal topic */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <label className="block font-korean text-gray-700 text-sm font-medium mb-2">
                새 제안서 주제 / 내용
              </label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="예: 스타트업 대상 AI 마케팅 콘텐츠 제작 워크샵 제안서&#10;- 대상: 소규모 스타트업 마케터&#10;- 목표: AI 툴로 SNS 콘텐츠 자동화&#10;- 기간: 3회 / 6시간"
                rows={5}
                className="w-full border border-gray-200 rounded-md px-3 py-2.5 text-sm font-korean
                           focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400
                           text-gray-800 placeholder:text-gray-300 resize-none"
              />
            </div>

            {/* Options */}
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => setGenerateImages(!generateImages)}
                  className={`w-11 h-6 rounded-full transition-colors relative flex-shrink-0 ${
                    generateImages ? 'bg-amber-500' : 'bg-gray-200'
                  }`}
                >
                  <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    generateImages ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </div>
                <div>
                  <p className="font-korean text-gray-700 text-sm font-medium">표지 이미지 자동 생성</p>
                  <p className="font-korean text-gray-400 text-xs">AI가 제안서 첫 섹션에 맞는 이미지를 생성합니다</p>
                </div>
              </label>
            </div>

            {/* Error */}
            {status === 'error' && error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p className="font-korean text-red-700 text-sm">{error}</p>
                  <button onClick={reset} className="font-korean text-red-500 text-xs mt-1 hover:text-red-700">
                    다시 시도
                  </button>
                </div>
              </div>
            )}

            {/* Generate button */}
            <button
              onClick={handleGenerate}
              disabled={isLoading || !apiKey.trim() || !template.trim() || !topic.trim()}
              className="w-full bg-navy text-white font-korean font-medium py-4 px-6 rounded-lg
                         flex items-center justify-center gap-2 text-sm tracking-wide
                         hover:bg-navy-medium transition-colors
                         disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 spinner" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {statusMessages[status] ?? '생성 중...'}
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  제안서 생성하기
                </>
              )}
            </button>

            {/* Model info */}
            <div className="text-center">
              <p className="font-korean text-gray-300 text-xs">
                텍스트: <code className="bg-gray-100 px-1 rounded text-gray-500">gemini-2.0-flash-lite</code>
                &nbsp;·&nbsp;
                이미지: <code className="bg-gray-100 px-1 rounded text-gray-500">gemini-3.1-flash-image-preview</code>
              </p>
            </div>
          </div>

          {/* Right: Output Panel */}
          <div>
            <div className="sticky top-20">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-korean font-semibold text-gray-700 text-lg">
                  생성된 제안서
                </h2>
                {proposal && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyText}
                      className="flex items-center gap-1.5 font-korean text-xs text-gray-500 border border-gray-200
                                 rounded-md px-3 py-1.5 hover:border-gray-300 hover:text-gray-700 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      텍스트 복사
                    </button>
                    <button
                      onClick={handlePrint}
                      className="flex items-center gap-1.5 font-korean text-xs text-white bg-navy border border-navy
                                 rounded-md px-3 py-1.5 hover:bg-navy-medium transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      인쇄 / PDF
                    </button>
                  </div>
                )}
              </div>

              {/* Loading state */}
              {isLoading && (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                  <div className="inline-flex flex-col items-center gap-4">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 rounded-full border-2 border-amber-100" />
                      <div className="absolute inset-0 rounded-full border-2 border-t-amber-500 spinner" />
                    </div>
                    <div>
                      <p className="font-korean text-gray-700 font-medium mb-1">
                        {statusMessages[status]}
                      </p>
                      <p className="font-korean text-gray-400 text-xs">{progress}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Empty state */}
              {status === 'idle' && !proposal && (
                <div className="bg-white rounded-lg border border-dashed border-gray-200 p-12 text-center">
                  <svg className="w-12 h-12 text-gray-200 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="font-korean text-gray-400 text-sm">
                    왼쪽에서 양식과 주제를 입력하고
                    <br />제안서 생성하기를 눌러주세요
                  </p>
                </div>
              )}

              {/* Generated proposal */}
              {proposal && (
                <div ref={printRef} className="space-y-4 max-h-[75vh] overflow-y-auto pr-2">
                  {/* Proposal title */}
                  <div className="bg-navy rounded-lg p-6 text-white">
                    <p className="font-korean text-gold/70 text-xs tracking-wider uppercase mb-2">AI 생성 제안서</p>
                    <h2 className="font-korean font-semibold text-xl">{proposal.title}</h2>
                    {status === 'done' && (
                      <div className="flex items-center gap-2 mt-3">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="font-korean text-white/50 text-xs">생성 완료 · {proposal.sections.length}개 섹션</span>
                      </div>
                    )}
                    {status === 'generating_images' && (
                      <div className="flex items-center gap-2 mt-3">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        <span className="font-korean text-white/50 text-xs">이미지 생성 중...</span>
                      </div>
                    )}
                  </div>

                  {/* Sections */}
                  {proposal.sections.map((section, i) => (
                    <SectionCard key={i} section={section} index={i} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          header, button, .sticky { display: none !important; }
          .max-h-\\[75vh\\] { max-height: none !important; overflow: visible !important; }
          body { background: white !important; }
        }
      `}</style>
    </div>
  )
}
