import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "..";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
