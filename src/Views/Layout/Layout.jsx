import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideBar from "./AdminSideBar/AdminSideBar";

const Layout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <AdminSideBar />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
