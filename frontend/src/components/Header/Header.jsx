import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 13); // Total number of images is 13
    }, 4000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="outterHeader">
      <div className='header' style={{ backgroundImage: `url('/header_img${currentImage}.png')` }}>
        <div className="headerContent">
          <h2>Welcome to SwiftOrder</h2>
          <p>
            Explore our eclectic menu featuring 
            a mouthwatering selection of dishes, 
            each meticulously crafted with premium 
            ingredients. Embark on a culinary adventure 
            and elevate your dining experience with 
            every delightful bite.
            </p>
          <a href="#exploreMenu"><button className="buttonwl">View Menu</button></a>
        </div>
      </div>
    </div>
  );
}

export default Header;

// GOOGLE MAP

// import React from 'react';
// import './Header.css';

// const Header = () => {
//   return (
//     <div className='header'>
//       <div className="google-map">
//         {/* Replace <YOUR-LATITUDE> and <YOUR-LONGITUDE> with the actual latitude and longitude of Enugu, Nigeria */}
//         <iframe
//           title="Google Maps"
//           src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6.5244!2d7.5024!3d15z`}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//       <div className="headerContent">
//         <h2>Welcome to SwiftOrder</h2>
//         <p>Explore our eclectic menu featuring a mouthwatering selection of dishes, each meticulously crafted with premium ingredients. Embark on a culinary adventure and elevate your dining experience with every delightful bite.</p>
//         <a href="#exploreMenu"><button className="buttonwl">View Menu</button></a>
//       </div>
//     </div>
//   );
// }

// export default Header;