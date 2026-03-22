import { useEffect, useRef, useState } from 'react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSubmitted(false)
      setForm({ name: '', organization: '', email: '', phone: '', type: '', message: '' })
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[강의문의] ${form.type} - ${form.name}`)
    const body = encodeURIComponent(
      `이름: ${form.name}\n소속: ${form.organization || '-'}\n이메일: ${form.email}\n연락처: ${form.phone || '-'}\n문의 유형: ${form.type}\n\n문의 내용:\n${form.message}`
    )
    window.open(`mailto:cri.ai.tive@gmail.com?subject=${subject}&body=${body}`)
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-navy-medium border border-white/10 text-white/90 placeholder-white/20 px-4 py-3 font-korean text-sm focus:outline-none focus:border-gold/50 transition-colors duration-200'

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(6, 8, 16, 0.85)', backdropFilter: 'blur(6px)' }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-navy-light border border-white/10"
        style={{ boxShadow: '0 0 60px rgba(200, 169, 110, 0.08)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/[0.07]">
          <div>
            <p className="font-korean text-gold text-xs tracking-widest uppercase mb-1">Contact</p>
            <h2 className="font-display-serif text-2xl text-white">강의 문의하기</h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-6">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mx-auto mb-5">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display-serif text-xl text-white mb-3">문의가 접수되었습니다</h3>
              <p className="font-korean text-white/40 text-sm leading-relaxed">
                2~3영업일 이내에 회신 드리겠습니다.
              </p>
              <button onClick={onClose} className="btn-primary mt-8 text-sm">
                닫기
              </button>
            </div>
          ) : (
            <>
              <p className="font-korean text-white/40 text-sm leading-relaxed text-center mb-8">
                교육 의뢰, 커리큘럼 공동개발, 강연·행사 협업이 필요하시면<br />
                아래 양식을 통해 편하게 연락 주세요.<br />
                <span className="text-gold/70 font-medium">2~3영업일 이내에 회신 드리겠습니다.</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: 이름 / 소속 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-korean text-white/50 text-xs mb-2">
                      이름 / Name <span className="text-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-korean text-white/50 text-xs mb-2">
                      소속 / Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2: 이메일 / 연락처 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-korean text-white/50 text-xs mb-2">
                      이메일 / E-mail <span className="text-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-korean text-white/50 text-xs mb-2">
                      연락처 / Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* 문의 유형 */}
                <div>
                  <label className="block font-korean text-white/50 text-xs mb-2">
                    문의 유형 <span className="text-gold">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                      className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                    >
                      <option value="" disabled hidden>선택해주세요</option>
                      <option value="강의">강의</option>
                      <option value="컨설팅">컨설팅</option>
                      <option value="협업">협업</option>
                      <option value="기타">기타</option>
                    </select>
                    <svg
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/50 pointer-events-none"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* 문의 내용 */}
                <div>
                  <label className="block font-korean text-white/50 text-xs mb-2">
                    문의 내용 <span className="text-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full btn-primary justify-center py-4 text-sm tracking-wider"
                >
                  문의 보내기
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
