import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const registerApi :any = createApi({
    reducerPath: 'registerApi',
      tagTypes: ['User'],

  baseQuery: fetchBaseQuery({ baseUrl: 'https://easyblurb.onrender.com/api/' }),
  endpoints: (builder) => ({
    registerBlurber: builder.mutation({
      query(body) {
        return {
          url: `register/blurb`,
          method: 'POST',
          body
        }
      }
    }),
  }),
})


export const {useRegisterBlurberMutation} = registerApi