import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiRTK = createApi({
  reducerPath: "apiRTK",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5500/",
  }),
  tagTypes: ["Products", "Cart-Products"],
  endpoints: (builder) => ({
    getBanners: builder.query<string[], void>({
      query: () => ({
        url: "banner",
      }),
    }),
    getProducts: builder.query<IProduct[], string | void>({
      query: (value = "") => ({
        url: `products?q=${value}`,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Products", id } as const)),
              { type: "Products", id: "Products_ID" },
            ]
          : [{ type: "Products", id: "Products_ID" }],
    }),
    getProduct: builder.query<IProduct, string>({
      query: (id) => ({
        url: `products/${id}`,
      }),
    }),
    editFavoriteProduct: builder.mutation<IProduct, IProduct>({
      query: (product) => ({
        url: `products/${product.id}`,
        method: "PUT",
        body: product,
      }),
      invalidatesTags: [{ type: "Products", id: "Products_ID" }],
    }),
    addProductCart: builder.mutation<any, ICart>({
      query: (product) => ({
        url: `cart`,
        method: "POST",
        body: product,
      }),
      invalidatesTags: [{ type: "Cart-Products", id: "Cart-Products_ID" }],
    }),
  }),
});

export const {
  useGetBannersQuery,
  useGetProductsQuery,
  useGetProductQuery,
  useEditFavoriteProductMutation,
  useAddProductCartMutation,
} = apiRTK;
