import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiRTK = createApi({
  reducerPath: "apiRTK",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5500/",
  }),
  tagTypes: ["Products"],
  endpoints: (build) => ({
    getBanner: build.query<string[], void>({
      query: () => ({
        url: "banner",
      }),
    }),

    getProducts: build.query<IProduct[], string | void>({
      query: (value = "") => ({
        url: `products/?q=${value}`,
      }),
      providesTags: (result) =>
        result
          ? [{ type: "Products", id: "Products_ID" }]
          : [{ type: "Products", id: "Products_ID" }],
    }),

    setFavouriteProduct: build.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `products/${product.id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: [{ type: "Products", id: "Products_ID" }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetBannerQuery,
  useSetFavouriteProductMutation,
} = apiRTK;
