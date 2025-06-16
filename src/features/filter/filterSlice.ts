import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface SearchState {
  query: string
  specialization: number | null
  skills: { id: number; title: string }[]
  complexity: number[]
  rate: number[]
  title: string
}

const initialState: SearchState = {
  query: '',
  specialization: null,
  skills: [],
  complexity: [],
  rate: [],
  title: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSpecialization: (state, action: PayloadAction<number>) => {
      state.specialization = action.payload
    },
    setSkill: (
      state,
      action: PayloadAction<{ id: number; title: string } | null>
    ) => {
      const skill = action.payload
      if (skill === null) {
        state.skills = []
      } else {
        // const exists = state.skills.includes(skill)
        // state.skills = exists
        //   ? state.skills.filter((id) => id !== skill)
        //   : [...state.skills, skill]
        const exists = state.skills.some((item) => item.id === skill.id)
        state.skills = exists
          ? state.skills.filter((item) => item.id !== skill.id)
          : [...state.skills, skill]
      }
    },
    setComplexity: (state, action: PayloadAction<number | null>) => {
      const complexityItem = action.payload
      if (complexityItem === null) {
        state.complexity = []
      } else {
        const exists = state.complexity.includes(complexityItem)
        state.complexity = exists
          ? state.complexity.filter((id) => id !== complexityItem)
          : [...state.complexity, complexityItem]
      }
    },
    setRate: (state, action: PayloadAction<number | null>) => {
      const rateItem = action.payload
      if (rateItem === null) {
        state.rate = []
      } else {
        const exists = state.rate.includes(rateItem)
        state.rate = exists
          ? state.rate.filter((id) => id !== rateItem)
          : [...state.rate, rateItem]
      }
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },
})

export const { setSkill, setSpecialization, setComplexity, setRate, setTitle } =
  filterSlice.actions

export const selectSkills = (state: RootState) => state.filter.skills
export const selectSpecialization = (state: RootState) =>
  state.filter.specialization
export const selectComplexity = (state: RootState) => state.filter.complexity
export const selectRate = (state: RootState) => state.filter.rate
export const selectTitle = (state: RootState) => state.filter.title
