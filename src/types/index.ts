export interface Service {
  id: number
  title: string
  subtitle: string
  description: string
  icon: string
  tags: string[]
}

export interface PortfolioItem {
  id: number
  label: string
  gradient: string
  accentColor: string
  description: string
}

export interface SuggestedPrompt {
  id: string
  label: string
  value: string
}

export interface ContactItem {
  id: string
  platform: string
  value: string
  href: string
  icon: string
}

export interface NavItem {
  id: string
  label: string
  href: string
}

export type GenerationStatus = 'idle' | 'loading' | 'success' | 'error'
