import React from "react";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import { Route, Routes, Link, NavLink, useParams, useNavigate } from 'react-router-dom';

const RoutingMain = ({ productItems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {
  return <div>
   <Routes>
    <Route path="/" element={<Products  productItems={productItems} handleAddProduct={handleAddProduct}/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />}></Route>
    <Route path="/specialoffers" element={<SpecialOffers />}></Route>
   </Routes>
  </div>
}

export default RoutingMain