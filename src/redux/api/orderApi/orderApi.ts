import { baseApi } from "../baseApi/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteOrder: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: `/order/create-order`,
            body: data,
          };
        }
      }),
   
  }),
});
export const { useCreteOrderMutation  } = orderApi;
