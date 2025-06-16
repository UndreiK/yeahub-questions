import { SpecializationType } from '../../specializations/api/types'
import { SkillType } from './../../skills/api/types'

export type QuestionType = {
  id: number
  rate: number
  complexity: string
  title: string
  description: string
  questionSkills: SkillType[]
  questionSpecializations: SpecializationType[]
  longAnswer: string
  shortAnswer: string
  keywords: string[]
}

export type Questions = {
  data: QuestionType[]
  limit: number
  page: number
  total: number
}

export interface QuestionApi {
  page: number
  limit?: number
  specialization: number | null
  skills: number[]
  complexity: number[]
  rate: number[]
  title: string
}
