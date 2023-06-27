import React from "react";
import { Products, Banner } from "@components/index";

const Home: React.FC = () => {
  return (
    <section className="py-8 md:py-10 lg:py-12">
      <div className="container">
        <Banner />
        <Products />
      </div>
    </section>
  );
};

export default Home;
