import { api } from "../api";

const base = "/auto-service/users";

const recommendationsApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<any, any>({
      query: (body) => ({
        url: `${base}/register`,
        method: "POST",
        body,
      }),
    }),
    login: build.mutation<any, any>({
      query: (body) => ({
        url: `${base}/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = recommendationsApi;
