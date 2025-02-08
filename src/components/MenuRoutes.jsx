import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import HomePage from "./homepage/HomePage";

const MenuRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
};

export default MenuRoutes;
