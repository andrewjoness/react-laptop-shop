import React from "react";
import { useNavigate } from "react-router-dom";
import './Cart.css'

const Cart = ({cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {
   const totalPrice=cartItems.reduce((price,item)=>
   {
    return (price+item.price*item.quantity)
   },0);
   let navigate=useNavigate();
   
  return <>
    <div className="cart-items">
        <div className="cart-items-header">
            Cart Items
        </div>
        <div className="clear-cart">
        <button className="clear-cart-button" onClick={()=>navigate(-1)}>Back</button>
        <button className="clear-cart-button" onClick={()=>navigate("/specialoffers")}>Special Offers</button>
        {cartItems.length>=1 && (<button className="clear-cart-button" onClick={handleCartClearance}>Clear Cart</button>)}
        </div>

        {cartItems.length === 0 && (<div className="cart-items-empty">No items are added in the cart</div>)}

        <div>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-items-list">
                    <img className="cart-items-image" src={item.image} alt={item.name} />
                    <div className="cart-items-name">
                        {item.name}
                    </div>
                    <div className="cart-items-function">
                        <button className="cart-items-add" onClick={() =>handleAddProduct(item)}>+</button>
                        <button className="cart-items-remove" onClick={() =>handleRemoveProduct(item)}>-</button>
                    </div>
                    <div className="cart-items-price">
                        {item.quantity} * ₹{item.price}
                    </div>
                </div>
            ))}
            <div className="cart-items-total-price-name">
                Total Price  
                <div className="cart-items-total-price">
                            ₹{totalPrice}
                </div>
            </div>
        </div>
    </div>
  </>

}

export default Cart