import React, { useState } from "react";
import data from "./components/back/Data/Data";  
import Header from "./components/front/Header/Header";
import RoutingMain from "./components/front/Routing/RoutingMain";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const{productItems} = data; 
  const[cartItems,setCartItems]=useState([]);

  const handleAddProduct = (productItem) => {
    const ProductExist=cartItems.find((item)=>item.id===productItem.id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item) => 
          item.id===productItem.id 
          ? {...ProductExist,quantity : ProductExist.quantity + 1}
          : item));   
    }
    else{
      setCartItems([...cartItems,{...productItem,quantity:1}])
    }
  };

  const handleRemoveProduct = (productItem) => {
    const ProductExist=cartItems.find((item) => item.id === productItem.id);
    if(ProductExist.quantity===1){
      setCartItems(cartItems.filter((item)=> item.id !== productItem.id))
    }
    else{
      setCartItems(
        cartItems.map((item) => 
          item.id === productItem.id 
            ? {...ProductExist,quantity : ProductExist.quantity-1}
            : item )
      )
    }
  };
  const handleCartClearance= () => {
    // window.confirm("Are you sure about deleting the cart");
    setCartItems([]);
  };
  return <div>  
    <BrowserRouter>
      <Header cartItems={cartItems}/>
      <RoutingMain productItems={productItems} cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />
    </BrowserRouter>
  </div>
}

export default App