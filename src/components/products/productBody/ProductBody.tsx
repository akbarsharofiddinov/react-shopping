import React from "react";
import { useGetProductsQuery } from "@store/apiRTK/apiRTK";
import ProductItem from "./productItem/ProductItem";
import LoadingProducts from "./loadingProducts/LoadingProducts";
import { useNavigate } from "react-router-dom";

const ProductBody: React.FC = () => {
  const navigate = useNavigate();

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

  if (isError || (products && products?.length <= 0)) {
    navigate("home-error");
  }
  return (
    <section className="section-app">
      {isLoading ? (
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
