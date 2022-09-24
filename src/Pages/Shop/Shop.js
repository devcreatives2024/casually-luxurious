import React from "react";
import {  Route, Routes } from "react-router-dom";
import ProductsView from "./ProductsView";
import Proudcts from "./Proudcts";

const Shop = () => {
  return (
    <div className="pt-24 mx-5">
      <Routes>
        <Route path="/shop" element={<Proudcts />}></Route>
        <Route path="/shop/:id" element={<ProductsView />}></Route>
      </Routes>
    </div>
  );
};

export default Shop;
