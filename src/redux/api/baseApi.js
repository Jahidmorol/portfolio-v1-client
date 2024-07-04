import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:3000/api",
  baseUrl: "https://jahidmorol-bv1.vercel.app/api",
  credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["blogs", "projects", "profile"],
  // refetchOnMountOrArgChange: 30,
  endpoints: () => ({}),
});
