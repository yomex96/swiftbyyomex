// import React, { useState, useEffect } from 'react';
// import ScrollUpButton from 'react-scroll-up-button';


// const BackToTopArrow = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Function to check if user scrolled enough to show the arrow
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     // Add event listener when component mounts
//     window.addEventListener('scroll', toggleVisibility);

//     // Clean up by removing event listener when component unmounts
//     return () => {
//       window.removeEventListener('scroll', toggleVisibility);
//     };
//   }, []);

//   // Scroll to the top when the arrow is clicked
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <ScrollUpButton
//       ShowAtPosition={150}
//       EasingType='easeOutCubic'
//       AnimationDuration={500}
//     />
//   );
// };

// export default BackToTopArrow;
