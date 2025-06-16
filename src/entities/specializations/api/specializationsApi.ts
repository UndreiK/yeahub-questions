import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Specializations } from './types'

export const specializationsApi = createApi({
  reducerPath: 'specializationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.yeatwork.ru' }),
  tagTypes: ['Specializations'],
  endpoints: (builder) => ({
    getSpecializations: builder.query<
      Specializations,
      { page?: number; limit?: number }
    >({
      query: ({ page, limit }) =>
        `/specializations?page=${page}&limit=${limit}`,
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: 'Specializations' as const,
                id,
              })),
              { type: 'Specializations', id: 'LIST' },
            ]
          : [{ type: 'Specializations', id: 'LIST' }],
    }),
  }),
})

export const { useGetSpecializationsQuery } = specializationsApi
