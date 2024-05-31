import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
    
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

return (
  <div className='foodItem'>
      <div className="foodItemImgContainer">
          <img src={image} alt="" className="foodItemImage" />
          {!cartItems[id]
              ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
              :<div className="foodItemCounter">
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItems[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>

          }
      </div>
      <div className="foodItemInfo">
          <div className="foodItemNameRating">
              <p>{name}</p>
              <img src={assets.rating_starts} alt='' />
          </div>
          <p className="foodItemDescription">
              {description}
          </p>
          <p className="foodItemPrice">
          ₦{price}
          </p>
      </div>
  </div>
)
}

export default FoodItem