import React from "react";
import Footer from '../components/Footer'
import Nav from '../components/nav'
import "./Gallery.css";
import img1 from "../components/images/ihhs.jpeg"
import img2 from "../components/images/ihs.jpg"
import img3 from "../components/images/ihs2.jpg"
import img4 from "../components/images/ihs3.jpg"
import img5 from "../components/images/ihss.jpeg"
import img6 from "../components/images/ihss.jpg"
import img7 from "../components/images/ihsss.jpg"
import img8 from "../components/images/ihssss.jpeg"
import img9 from "../components/images/tihs.jpeg"
import img10 from "../components/images/sports.jpg"
import img11 from "../components/images/trophy.jpeg"
import img12 from "../components/images/trophy.jpg"
import img13 from "../components/images/seniors.jpg"
import img14 from "../components/images/prefets.jpg"
import img15 from "../components/images/full student.jpg"
import img16 from "../components/images/gallery.jpg"

const Gallery = () => {
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img16,img13,img14,img15];

  return (
    <>
     <Nav/>
    <div className="gallery-page">
      <h1>Our Gallery</h1>
      <p>Explore memorable moments at Topstar Schools</p>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    <Footer/>
<a id="toTop" class="btn btn-primary" role="button" href="#" target="_top" title="Back to Top">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
    </svg>
</a>
    </>
  );
};

export default Gallery;
