import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


// //render
const FoodDisplay = ({ category }) => {
  const { food_list, token } = useContext(StoreContext);

  // Render FoodDisplay only if token exists
  if (!token) {
      return null;
  }

  return (
      <div className='foodDisplay' id='foodDisplay'>
          <h2>Find Dishes Near You</h2>
          <div className="foodDisplayList">
              {food_list.map((item, index) => {
                  if (category === 'All' || category === item.category) {
                      return (
                          <FoodItem
                              key={index}
                              id={item._id}
                              name={item.name}
                              description={item.description}
                              price={item.price}
                              image={item.image}
                          />
                      );
                  }
              })}
          </div>
      </div>
  );
}

export default FoodDisplay;




// const FoodDisplay = ({category}) => {

//     const {food_list} = useContext(StoreContext)

    

//   return (
//     <div className='foodDisplay' id='foodDisplay'>
//         <h2>Find Dishes Near You</h2>
//         <div className="foodDisplayList">
//             {food_list.map((item,index)=>{
//               if (category==='All' || category===item.category) {
//                 return <FoodItem 
//                 key={index} 
//                 id={item._id} 
//                 name={item.name} 
//                 description={item.description} 
//                 price={item.price} 
//                 image={item.image} 
//                 />
//               }
//             })}
//         </div>
//     </div>
//   )
// }

// export default FoodDisplay
