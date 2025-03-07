import React from 'react';
import './ProductCard.css'
// import img1 from '../components/images/environ.jpg'
// import img2 from '../components/images/slo.jpg'
// import img3 from '../components/images/room.jpg'
import img4 from '../components/images/qual1.jpeg'
import img5 from '../components/images/fali.jpeg'
import img6 from '../components/images/siy.jpeg'

export default function ProductCard() {
 return (
    <div className="section-container">
    <h2 className="section-title">Why Choose Us ?</h2>
    <div className="boxes-container">
      <div className="box">
        <img src={img4} alt="Quality Education" />
        <p>Quality Education - We provide top-tier learning with expert instructors.</p>
      </div>
      <div className="box">
        <img src={img5} alt="Modern Facilities" />
        <p>Modern Facilities - Equipped with the latest technology and resources.</p>
      </div>
      <div className="box">
        <img src={img6} alt="Safe Environment" />
        <p>Safe Environment - A secure and nurturing space for growth and learning.</p>
      </div>
    </div>
  </div>
      );
    };
