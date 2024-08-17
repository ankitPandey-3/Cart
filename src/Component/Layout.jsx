import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Header />
      <main className="flex-grow m-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
