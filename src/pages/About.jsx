import React from "react";
import "./About.css";
import Nav from '../components/nav';
import Footer from '../components/Footer';
import Stud from '../components/images/students.jpg'

export default function About() {
  return (
    <>
    <Nav/>
    <div className="about-page">
      <section className="hero">
        <h1> Topstar Schools</h1>
        <p>Providing Excellence in Education for a Brighter Future</p>
      </section>
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At Topstar Schools, we are committed to nurturing young minds and providing a well-rounded 
            education. Our mission is to create a supportive learning environment where students thrive 
            academically, socially, and morally.
          </p>
          <p>
            We offer a blend of traditional and modern teaching methods, ensuring that our students 
            receive the best possible education to prepare them for the future.
          </p>
        </div>
        <div className="about-image">
          <img src={Stud} alt="Topstar School" />
        </div>
      </section>
      <section className="vision-mission">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be a leading educational institution that inspires students to reach their full potential, 
            shaping them into responsible global citizens.
          </p>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To provide high-quality education in a nurturing and innovative environment, fostering 
            intellectual, moral, and social growth in every student.
          </p>
        </div>
      </section>
      <section className="map-section">
  <h2>Find Us</h2>
  <div className="map-container">
    <iframe
      title="Topstar Schools Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.236922391011!2d3.3290345737295706!3d6.491656423535185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8eaf73826029%3A0x59666ae0fd30aeff!2sTopstar%20Group%20of%20Schools!5e0!3m2!1sen!2sng!4v1741299316259!5m2!1sen!2sng"
      width="100%"
      height="400"
      style={{ border: "0", borderRadius: "10px" }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
      </section>
    <Footer/>
<a id="toTop" class="btn btn-primary" role="button" href="#" target="_top" title="Back to Top">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
    </svg>
</a>
    </div>
    </>
  )
 }


