import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Skills } from './types'

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru' }),
  tagTypes: ['Skills'],
  endpoints: (builder) => ({
    getSkills: builder.query<
      Skills,
      { page?: number; limit?: number; specialization?: number | null }
    >({
      query: ({ page, limit, specialization }) =>
        `skills?page=${page}&limit=${limit}${
          specialization && `&specializations=${specialization}`
        }`,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: 'Skills' as const,
                id,
              })),
              { type: 'Skills', id: 'LIST' },
            ]
          : [{ type: 'Skills', id: 'LIST' }],
    }),
  }),
})

export const { useGetSkillsQuery } = skillsApi
