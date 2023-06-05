import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiRTK = createApi({
  reducerPath: "apiRTK",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5500/",
  }),
  endpoints: (build) => ({
    getBanner: build.query<string[], void>({
      query: () => ({
        url: "banner",
      }),
    }),

    getProducts: build.query<IProduct[], void>({
      query: () => ({
        url: "products",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetBannerQuery } = apiRTK;
