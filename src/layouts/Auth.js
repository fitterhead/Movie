import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function AuthLayout() {
  return (
    <>
      <p>Auth</p>
      <Outlet />
    </>
  );
}

export default AuthLayout;
