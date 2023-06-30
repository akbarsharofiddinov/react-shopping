import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "..";

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center w-full min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
