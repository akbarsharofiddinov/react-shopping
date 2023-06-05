import React from "react";
import { useGetProductsQuery } from "@store/apiRTK/apiRTK";
import ProductItem from "./productItem/ProductItem";

const ProductBody: React.FC = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();

  if (!localStorage.getItem("isFavArr")) {
    if (products) {
      const favArr: { id: number; isFav: boolean }[] = [];

      products?.forEach((item) =>
        favArr.push({ id: item.id, isFav: item.isFavorite })
      );

      localStorage.setItem("isFavArr", JSON.stringify(favArr));
    }
  }

  return (
    <section className="section-app">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : products ? (
        <div className="grid grid-cols-4 gap-[20px]">
          {products.map((product) => (
            <ProductItem key={product.id} data={product} />
          ))}
        </div>
      ) : (
        <h1>No Data</h1>
      )}
    </section>
  );
};

export default ProductBody;
