import React from "react";
import { useGetProductsQuery } from "@store/apiRTK/apiRTK";
import { useAppSelector } from "@store/hooks/redux-Hook";
import ProductItem from "./productItem/ProductItem";
import LoadingProducts from "./loadingProducts/LoadingProducts";
import ErrorProduct from "./errorProduct/ErrorProduct";

const ProductBody: React.FC = () => {
  const { searchQuery } = useAppSelector((state) => state.searchQuerySlice);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery(searchQuery);

  return (
    <section className="section-app">
      {isError ?
        <div>
          <h1>Error</h1>
        </div> : isLoading ? (
          <LoadingProducts />
        ) : products?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
            {products?.map((product) => (
              <ProductItem key={product.id} data={product} />
            ))}
          </div>
        ) : <ErrorProduct />}
    </section>
  );
};

export default ProductBody;
