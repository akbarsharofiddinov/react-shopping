import React from "react";
import { useGetProductsQuery } from "@store/apiRTK/apiRTK";
import ProductItem from "./productItem/ProductItem";
import LoadingProducts from "./loadingProducts/LoadingProducts";
import { useAppSelector } from "@store/hooks/redux-Hook";

const ProductBody: React.FC = () => {
  const { searchQuery } = useAppSelector((state) => state.searchQuerySlice);
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsQuery(searchQuery);

  return (
    <section className="section-app">
      {isError ? <></> : isLoading ? (
        <LoadingProducts />
      ) : (
        <div className="grid grid-cols-4 gap-[20px]">
          {products?.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductBody;
