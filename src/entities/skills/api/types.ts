import { Specializations } from './../../specializations/api/types'

export type SkillType = {
  id: number
  title: string
  description: string
  specializations: Specializations[]
}

export type Skills = {
  data: SkillType[]
  limit: number
  page: number
  total: number
}
