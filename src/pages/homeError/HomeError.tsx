import React from "react";
import ErrorProducts from "@components/products/productBody/errorProducts/errorProducts";

const HomeError: React.FC = () => {
  return (
    <section className="section-app">
      <div className="container h-[70vh] flex items-center justify-center">
        <ErrorProducts />
      </div>
    </section>
  );
};

export default HomeError;
