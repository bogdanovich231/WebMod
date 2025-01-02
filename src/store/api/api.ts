import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://webmodtech.com/wordpress/wp-json/wp/v2/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAbout: builder.query({
      query: () => 'about_post',
    }),
    getProjects: builder.query({
      query: () => 'projects_post',
    }),

  }),
});

export const {
  useGetAboutQuery,
  useGetProjectsQuery,

} = api;