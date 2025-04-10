import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <div className="navbar bg-green-900 text-primary-content">
        <button className="btn btn-ghost text-xl">daisyUI</button>
      </div>
      <Outlet />
      <footer>THIS IS FOOTER</footer>
    </div>
  );
};

export default MainLayout;
