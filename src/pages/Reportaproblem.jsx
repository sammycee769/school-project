import React, { useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/nav'
import "./ReportAProblem.css";

export default function Reportaproblem() {
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields before submitting.");
    } else {
      // Show confirmation alert
      alert("Thanks for reaching out! Your complaint has been received.");

      // Clear form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
     <Nav/>
    <div className="report-page">
      <h1>Report a Problem</h1>
      <p>We value your feedback. Please let us know any issues or concerns.</p>

      <form onSubmit={handleSubmit} className="report-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />

        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          value={formData.subject} 
          onChange={handleChange} 
          required 
        />

        <textarea 
          name="message" 
          placeholder="Describe the issue..." 
          rows="5" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
     <Footer/>
     <a id="toTop" class="btn btn-primary" role="button" href="#" target="_top" title="Back to Top">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor">
    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
    </svg>
    </a>
    </>
  )
}
