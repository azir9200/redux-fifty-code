import { baseApi } from "../baseApi/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    // getMe: builder.mutation({
    //   query: (userInfo) => ({
    //     url: "/user/me",
    //     method: "GET",
    //     body: userInfo,
    //   }),
    // }),

  }),
});
export const { useSignUpMutation, useLoginMutation, } = authApi;
