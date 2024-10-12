import { baseApi } from "../baseApi/baseApi";

const stripePayApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteStripePay: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/stripe/create-payment-intent`,
          body: data,
        };
      },
    }),
  }),
});
export const { useCreteStripePayMutation } = stripePayApi;
