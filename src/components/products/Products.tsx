import React from "react";
import FilterProducts from "./filterProducts/FilterProducts";
import ProductsData from "./productsData/ProductsData";

const Products: React.FC = () => {
  return (
    <div className="py-[30px] md:py-[50px] lg:py-[80px]">
      <FilterProducts />
      <ProductsData />
    </div>
  );
};

export default Products;
