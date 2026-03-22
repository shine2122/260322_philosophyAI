import { useState, useCallback } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

export interface ProposalSection {
  title: string
  content: string
  imageData?: string
  imagePrompt?: string
}

export interface GeneratedProposal {
  title: string
  sections: ProposalSection[]
  rawText: string
}

type Status = 'idle' | 'analyzing' | 'generating' | 'generating_images' | 'done' | 'error'

interface UseProposalGeneratorReturn {
  generate: (template: string, topic: string, generateImages: boolean) => Promise<void>
  proposal: GeneratedProposal | null
  status: Status
  progress: string
  error: string | null
  reset: () => void
}

// Text model for proposal generation
const TEXT_MODEL = 'gemini-2.0-flash-lite'
// Image model for proposal images
const IMAGE_MODEL = 'gemini-2.0-flash-preview-image-generation'
// const IMAGE_MODEL = 'gemini-3.1-flash-image-preview'

function parseProposalSections(text: string): ProposalSection[] {
  const lines = text.split('\n')
  const sections: ProposalSection[] = []
  let currentSection: ProposalSection | null = null
  let contentLines: string[] = []

  for (const line of lines) {
    // Detect headings: ## or # or bold **text**
    const headingMatch = line.match(/^#{1,3}\s+(.+)$/) || line.match(/^\*\*([^*]+)\*\*\s*$/)
    if (headingMatch) {
      // Save previous section
      if (currentSection) {
        currentSection.content = contentLines.join('\n').trim()
        sections.push(currentSection)
      }
      currentSection = { title: headingMatch[1].trim(), content: '' }
      contentLines = []
    } else if (currentSection) {
      contentLines.push(line)
    }
  }

  // Push last section
  if (currentSection) {
    currentSection.content = contentLines.join('\n').trim()
    sections.push(currentSection)
  }

  // If no sections parsed, return as single section
  if (sections.length === 0) {
    return [{ title: '제안서', content: text.trim() }]
  }

  return sections.filter(s => s.title || s.content)
}

export function useProposalGenerator(apiKey: string): UseProposalGeneratorReturn {
  const [proposal, setProposal] = useState<GeneratedProposal | null>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [progress, setProgress] = useState('')
  const [error, setError] = useState<string | null>(null)

  const reset = useCallback(() => {
    setProposal(null)
    setStatus('idle')
    setProgress('')
    setError(null)
  }, [])

  const generate = useCallback(
    async (template: string, topic: string, generateImages: boolean) => {
      if (!apiKey.trim()) {
        setError('Gemini API 키를 입력해주세요.')
        setStatus('error')
        return
      }
      if (!template.trim()) {
        setError('제안서 양식을 입력해주세요.')
        setStatus('error')
        return
      }
      if (!topic.trim()) {
        setError('새 제안서 내용/주제를 입력해주세요.')
        setStatus('error')
        return
      }

      try {
        const genAI = new GoogleGenerativeAI(apiKey)

        // Step 1: Analyze template and generate new proposal text
        setStatus('analyzing')
        setProgress('제안서 양식을 분석하는 중...')

        const textModel = genAI.getGenerativeModel({ model: TEXT_MODEL })

        const textPrompt = `당신은 전문 제안서 작성 전문가입니다.

아래 [제안서 양식]의 구조와 형식을 분석한 후, [새 제안서 주제]에 맞는 새로운 제안서를 작성해주세요.

규칙:
1. 양식의 섹션 구조(목차)를 동일하게 유지하세요
2. 각 섹션의 성격과 깊이를 반영하세요
3. 내용은 새 주제에 맞게 완전히 새로 작성하세요
4. 마크다운 형식(##, ###, **굵게**, - 리스트)을 사용하세요
5. 전문적이고 설득력 있는 문체로 작성하세요
6. 한국어로 작성하세요

[제안서 양식]
${template}

[새 제안서 주제]
${topic}

위 주제로 새로운 제안서를 작성해주세요:`

        setStatus('generating')
        setProgress('AI가 제안서를 작성하는 중...')

        const textResult = await textModel.generateContent(textPrompt)
        const generatedText = textResult.response.text()

        // Parse into sections
        const sections = parseProposalSections(generatedText)

        // Extract title from first section or topic
        const titleSection = sections[0]
        const proposalTitle = titleSection?.title || topic

        const baseProposal: GeneratedProposal = {
          title: proposalTitle,
          sections,
          rawText: generatedText,
        }

        setProposal(baseProposal)

        // Step 2: Optionally generate images for key sections
        if (generateImages && sections.length > 0) {
          setStatus('generating_images')

          const imageModel = genAI.getGenerativeModel({
            model: IMAGE_MODEL,
            generationConfig: {
              responseModalities: ['image', 'text'],
            } as never,
          })

          // Generate image for the first/main section
          const updatedSections = [...sections]
          const coverImagePrompt = `전문적인 비즈니스 제안서 커버 이미지: ${topic}.
          깔끔하고 현대적인 디자인, 전문적인 분위기, 고해상도, 미니멀한 스타일`

          setProgress('표지 이미지를 생성하는 중...')

          try {
            const imageResult = await imageModel.generateContent(coverImagePrompt)
            for (const part of imageResult.response.candidates?.[0]?.content?.parts ?? []) {
              if (part.inlineData) {
                updatedSections[0] = {
                  ...updatedSections[0],
                  imageData: `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`,
                  imagePrompt: coverImagePrompt,
                }
                break
              }
            }
          } catch {
            // Image generation failed silently — continue without image
          }

          setProposal({ ...baseProposal, sections: updatedSections })
        }

        setStatus('done')
        setProgress('제안서 생성 완료!')
      } catch (err: unknown) {
        let message = '제안서 생성 중 오류가 발생했습니다.'
        if (err instanceof Error) {
          if (err.message.includes('API key') || err.message.includes('API_KEY')) {
            message = 'API 키가 유효하지 않습니다. 올바른 Gemini API 키를 입력해주세요.'
          } else if (err.message.includes('quota') || err.message.includes('QUOTA')) {
            message = 'API 사용량 한도를 초과했습니다. 잠시 후 다시 시도해주세요.'
          } else if (err.message.includes('model') || err.message.includes('MODEL')) {
            message = '모델을 사용할 수 없습니다. API 키 권한을 확인해주세요.'
          } else {
            message = err.message
          }
        }
        setError(message)
        setStatus('error')
      }
    },
    [apiKey]
  )

  return { generate, proposal, status, progress, error, reset }
}
