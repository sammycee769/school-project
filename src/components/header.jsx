// import { useState, useEffect } from "react";

// const SlideshowBackground = () => {
//   const images = [over, clover, cover ,ove];
//   const [index, setIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeout(() => {
//         setIndex((prevIndex) => (prevIndex + 1) % images.length);
//       }, 500); // 0.5s fade-out before changing image
//     }, 5000); // Change every 5 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       style={{
//         width: "100vw",
//         height: "100vh",
//         backgroundImage: `url(${images[index]})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         transition: "background-image 1s ease-in-out",
//         imageRendering:"crisp-edges",
//         imageRendering:"-webkit-optimize-contrast"

//       }}
//     >
//       <h1 style={{ color: "white", textAlign: "center", paddingTop: "20px" }}>
        
//       </h1>
//     </div>
//   );
// };

// export default SlideshowBackground;

import React, { useState, useEffect } from 'react';
import img1 from './images/cover.jpg'; 
import img2 from './images/coverphoto.jpg';
import img3 from './images/gallery.jpg';
import img4 from './images/library.jpg';

const slides = [
  {
    image: img1,
    title: 'Inspiring Excellence, Shaping the Future.',
    subtitle: 'Where Knowledge Meets Innovation',
    buttonText: 'Ready to get Started?',
  },
  {
    image: img2,
    title: 'Unlocking Your Hidden Potential.',
    subtitle: 'Learn, Grow, Succeed',
    buttonText: 'Explore Opportunities',
  },
  {
    image: img3,
    title: 'Beyond Education: A Path To Greatness',
    subtitle: 'Empowering Young Minds for Tomorrow',
    buttonText: 'Join Us Today',
  },
  {
    image: img4,
    title: 'Brilliance Begins Here',
    subtitle: 'Cultivating Dreams, Creating Leaders.',
    buttonText: 'Be Part Of The Journey',
  },
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFade(true); // Start fade-in effect
      }, 500); // 0.5s fade-out before changing image
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div
        className="slide"
        style={{
          backgroundImage: `url(${slides[index].image})`,
          opacity: fade ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
         <div className="overlay"></div>

        <div className="slide-content">
          <h2>{slides[index].subtitle}</h2>
          <h1>{slides[index].title}</h1>
          <button> <a href="/register" style={{color:"white",textDecoration:"none"}}>{slides[index].buttonText}
          </a>
          </button>
        </div>
      </div>

      <style jsx>{`
        .slideshow-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 38, 77, 0.5); /* Blue overlay with transparency */
          top: 0;
          left: 0;
        }
        .slide-content {
          position: absolute;
          bottom: 20%;
          left: 10%;
          color: white;
        }
        .slide-content h2 {
          font-size: 1rem;
          color:yellow
        }
        .slide-content h1 {
          font-size: 3rem;
          margin: 0.5rem 0;
        }
        .slide-content button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Slideshow;

