import { baseApi } from "../baseApi/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: "product/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
