import React from 'react'
import Nav from '../components/nav'
import Header from '../components/header'
import Prin from '../components/images/prin.jpg'
import './Home.css'
import ProductCard from './Schoolcard'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Nav/>
    <Header/>
<div className="proprietor-section">
  <div className="proprietor-content">
  <img src={Prin} alt="Proprietor" className="proprietor-image" />
  <div className="proprietor-text">
    <h2>Message from the Proprietor</h2>
    <p>
      Welcome to Princeton Schools, where every child is given the tools to thrive. 
      Our school is not just about education; it's about nurturing creativity, leadership, 
      and confidence in every student. We believe in a future where our students stand 
      out in academics, sports, and innovation. Join us on this journey of excellence.
    </p>
    <p>
           "Education is more than just acquiring knowledge; it is the foundation upon which 
            dreams are built and futures are shaped. At our institution, we are committed 
            to nurturing not just brilliant minds but also compassionate, innovative, and 
            forward-thinking leaders.  
          </p>
          <p>
            Our goal is to create an environment where students are inspired to think 
            critically, embrace creativity, and develop the confidence to excel in all aspects of life.  
            We believe in holistic education—one that balances academic excellence with moral 
            integrity, leadership, and a strong sense of purpose.
          </p>
          <p>
            Every child has limitless potential, and it is our mission to unlock that greatness. 
            With a team of dedicated educators, a cutting-edge curriculum, and a community 
            that fosters growth, we are shaping a generation that will not only succeed but also 
            make a lasting impact on the world.  
          </p>
          <p>
            We welcome you to be part of this transformative journey, where learning knows no 
            boundaries, and success is not just a goal but a way of life."
          </p>
          <p><strong>- Ndulue Chidubem, Proprietor</strong></p>
  </div>
  </div>
</div>
<div className="info-section">
  <div className="info-container">
    <div className="info-box">
      <h3> Upcoming Events</h3>
      <div className="scrolling-container">
        <ul className="scrolling-text">
          <li>🏆 Annual Sports Day</li>
          <li>🎭 Cultural Extravaganza</li>
          <li>📝 Mid-Term Examinations</li>
          <li>🎓 Career Guidance Seminar</li>
          <li>🔬 Science & Innovation Fair</li>
          <li>👨‍👩‍👧 Parent-Teacher Conference</li>
          <li>📅 Science Fair – March 15, 2025</li>
          <li>⚽ Sports Week – April 5-9, 2025</li>
          <li>🎓 Graduation Ceremony – June 10, 2025</li>
        </ul>
      </div>
    </div>

    <div className="info-box">
      <h3>Latest News</h3>
      <div className="scrolling-container">
        <ul className="scrolling-text">
          <li>🎨 Art & Design Exhibition</li>
          <li>📚 Library Expansion Project</li>
          <li>🚀 Coding Bootcamp for Students</li>
          <li>🎤 Guest Lecture Series Launched</li>
          <li>💻 New Computer Lab Inauguration</li>
          <li>📖 New library expansion completed!</li>
          <li>🌱 Green School Initiative Launched</li>
          <li>🏆 Our school wins the National Math Olympiad!</li>
          <li>🎭 Drama club presents "Romeo & Juliet" this Friday!</li>
        </ul>
      </div>
    </div>

    <div className="info-box">
      <h3>Achievements</h3>
      <div className="scrolling-container">
        <ul className="scrolling-text">
          <li>🏆 Best School Award 2025</li>
          <li>🥇 Math Olympiad Champions</li>
          <li>🎖️ Scholarship Winners Announced</li>
          <li>🥇 Best Secondary School Award 2025</li>
          <li>🏅 5 students qualify for international debate finals</li>
          <li>💡 Innovation Club develops an AI-based learning app!</li>
          <li>🗣️ Debate Team Wins National Championship</li>
          <li>⚽ Football Team Wins Inter-School Tournament</li>
          <li>🎵 Music Club Wins Regional Competition</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<ProductCard/>
<Footer/>
<a id="toTop" class="btn btn-primary" role="button" href="#" target="_top" title="Back to Top">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
    </svg>
</a>
</>
  )
}
