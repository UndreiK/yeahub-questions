import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { QuestionApi, Questions, QuestionType } from './types'

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru' }),
  tagTypes: ['Questions'],
  endpoints: (builder) => ({
    getQuestions: builder.query<Questions, QuestionApi>({
      query: ({
        page,
        specialization,
        skills,
        limit,
        complexity,
        rate,
        title,
      }) => {
        const params = new URLSearchParams()
        params.append('page', String(page))
        params.append('limit', String(limit))
        if (title) params.append('title', title)
        if (rate?.length) params.append('rate', rate.join(','))
        if (skills?.length) params.append('skills', skills.join(','))
        if (complexity?.length)
          params.append('complexity', complexity.join(','))
        if (specialization)
          params.append('specialization', specialization.toString())
        return `questions/public-questions?${params.toString()}`
      },

      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: 'Questions' as const,
                id,
              })),
              { type: 'Questions', id: 'LIST' },
            ]
          : [{ type: 'Questions', id: 'LIST' }],
    }),
    getQuestionById: builder.query<QuestionType, { id: string | undefined }>({
      query: ({ id }) => `/questions/public-questions/${id}`,
    }),
  }),
})

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionsApi
