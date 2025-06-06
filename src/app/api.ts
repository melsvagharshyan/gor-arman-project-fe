import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gor-arman-server-production.up.railway.app",
  }),
  endpoints: () => ({}),
});
