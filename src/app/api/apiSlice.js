import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://web2technote-api.onrender.com' }),
    credentials: 'include',
    tagTypes: ['Note', 'User'],
    endpoints: builder => ({})
})
