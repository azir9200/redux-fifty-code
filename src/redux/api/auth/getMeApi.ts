import { baseApi } from "../baseApi/baseApi";

const getMeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/user/get-myself",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMeQuery } = getMeApi;
