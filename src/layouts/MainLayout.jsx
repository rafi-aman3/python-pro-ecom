import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Topbar from "../components/Layout/Topbar";

const MainLayout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
