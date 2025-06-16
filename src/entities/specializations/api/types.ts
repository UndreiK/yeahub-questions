export type SpecializationType = {
  id: number
  title: string
  description: string
  imageSrc: string
}

export type Specializations = {
  data: SpecializationType[]
  limit: number
  page: number
  total: number
}
