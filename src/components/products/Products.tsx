import React from "react";
import ProductFilter from "./filter/ProductFilter";
import ProductBody from "./productBody/ProductBody";

const Products: React.FC = () => {
  return (
    <section className="section-app">
      <div className="container">
        <ProductFilter />
        <ProductBody />
      </div>
    </section>
  );
};

export default Products;
