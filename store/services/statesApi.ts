
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface States {
    id: number,
    name: string,
    lgas: Array<object>

}

export const statesApi :any = createApi({
  reducerPath: 'statesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://easyblurb.onrender.com/api/' }),
  endpoints: (builder) => ({
    getAllStates: builder.query<States,void>({
      query: () => `fields/states`,
    }),
  }),
})

export const {useGetAllStatesQuery} = statesApi