import { useState, useCallback } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import type { GenerationStatus } from '../types'

interface UseGeminiReturn {
  generateImage: (prompt: string) => Promise<void>
  imageData: string | null
  isLoading: boolean
  status: GenerationStatus
  error: string | null
  reset: () => void
}

export function useGemini(apiKey: string): UseGeminiReturn {
  const [imageData, setImageData] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<GenerationStatus>('idle')
  const [error, setError] = useState<string | null>(null)

  const reset = useCallback(() => {
    setImageData(null)
    setStatus('idle')
    setError(null)
  }, [])

  const generateImage = useCallback(
    async (prompt: string) => {
      if (!apiKey.trim()) {
        setError('Gemini API 키를 입력해주세요.')
        setStatus('error')
        return
      }

      if (!prompt.trim()) {
        setError('이미지 생성을 위한 프롬프트를 입력해주세요.')
        setStatus('error')
        return
      }

      setIsLoading(true)
      setStatus('loading')
      setError(null)
      setImageData(null)

      try {
        const genAI = new GoogleGenerativeAI(apiKey)

        // Primary model for image generation
        const model = genAI.getGenerativeModel({
          model: 'gemini-3.1-flash-image-preview',
          generationConfig: {
            responseModalities: ['image', 'text'],
          } as never,
        })

        const enhancedPrompt = `고품질 인테리어/공간 디자인 이미지: ${prompt}.
        Professional architectural photography, high resolution, beautiful lighting,
        luxury interior design aesthetic, photorealistic rendering.`

        const result = await model.generateContent(enhancedPrompt)

        let foundImage = false
        for (const part of result.response.candidates?.[0]?.content?.parts ?? []) {
          if (part.inlineData) {
            const base64Data = part.inlineData.data
            const mimeType = part.inlineData.mimeType
            setImageData(`data:${mimeType};base64,${base64Data}`)
            setStatus('success')
            foundImage = true
            break
          }
        }

        if (!foundImage) {
          throw new Error('이미지 데이터를 받지 못했습니다. 다시 시도해주세요.')
        }
      } catch (err: unknown) {
        let message = '이미지 생성 중 오류가 발생했습니다.'

        if (err instanceof Error) {
          if (err.message.includes('API key')) {
            message = 'API 키가 유효하지 않습니다. 올바른 Gemini API 키를 입력해주세요.'
          } else if (err.message.includes('quota')) {
            message = 'API 사용량 한도를 초과했습니다. 잠시 후 다시 시도해주세요.'
          } else if (err.message.includes('safety')) {
            message = '안전 정책에 의해 이미지 생성이 제한되었습니다. 다른 프롬프트를 시도해주세요.'
          } else if (err.message.includes('model')) {
            message = '모델을 사용할 수 없습니다. API 키 권한을 확인해주세요.'
          } else {
            message = err.message
          }
        }

        setError(message)
        setStatus('error')
      } finally {
        setIsLoading(false)
      }
    },
    [apiKey]
  )

  return { generateImage, imageData, isLoading, status, error, reset }
}
