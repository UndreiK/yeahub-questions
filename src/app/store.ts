import { filterSlice } from '../features/filter/filterSlice'
import { configureStore } from '@reduxjs/toolkit'
import { specializationsApi } from '../entities/specializations/api/specializationsApi'
import { skillsApi } from '../entities/skills/api/skillsApi'
import { questionsApi } from '../entities/questions/api/questionsApi'

export const store = configureStore({
  reducer: {
    [specializationsApi.reducerPath]: specializationsApi.reducer,
    [skillsApi.reducerPath]: skillsApi.reducer,
    [questionsApi.reducerPath]: questionsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(specializationsApi.middleware)
      .concat(skillsApi.middleware)
      .concat(questionsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
