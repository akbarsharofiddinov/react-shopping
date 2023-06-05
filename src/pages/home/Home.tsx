import React from "react";
import { Banner, Products } from "@components/index";

const Home: React.FC = () => {
  return (
    <section className="section-app">
      <div className="container">
        <Banner />
        <Products />
      </div>
    </section>
  );
};

export default Home;
