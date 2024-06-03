// import React, { useContext } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../Context/StoreContext";
// import { useNavigate } from "react-router-dom";
import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

// Cart
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="carContained">
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className="cart-items-item" key={index}>
                  <img src={url+"/images/"+item.image} alt="" />
                  {/* <img src={item.image} alt={item.name} /> */}
                  <p>{item.name}</p>
                  <p>₦{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₦{item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)}>X</p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="cartBottom">
          <div className="cartTotal">
            <h2>Cart Total</h2>
            <div>
              <div className="cartTotalDeails">
                <p>Sub Total</p>
                <p>₦{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartTotalDeails">
                <p>Delivery Fee</p>
                <p>₦ {getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cartTotalDeails">
                <b>Total</b>
                <b>₦{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
            <button onClick={()=>navigate('/Order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartPromoCode">
            <div>
              <p>Enter Promo Code</p>
              <div className="cartPromoInput">
                <input type="text" placeholder="Promo Code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;