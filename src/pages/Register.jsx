import React, { useState } from "react";
import "./Auth.css";
import Footer from '../components/Footer'
import Nav from '../components/nav'

export default function Register() {
 const [formData, setFormData] = useState({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          dateOfBirth: "",
          gender: "",
          phoneNumber: "",
          address: "",
          guardianName: "",
          guardianPhone: "",
        });
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (
            !formData.fullName ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword ||
            !formData.dateOfBirth ||
            !formData.gender ||
            !formData.phoneNumber ||
            !formData.address ||
            !formData.guardianName ||
            !formData.guardianPhone
          ) {
            alert("Please fill in all fields.");
            return;
          }
      
          if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match.");
            return;
          }
      
          alert("Registration successful! Welcome to Topstar Schools.");
          setFormData({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            dateOfBirth: "",
            gender: "",
            phoneNumber: "",
            address: "",
            guardianName: "",
            guardianPhone: "",
          });
        };
      
        return (
           <>
          <Nav/>        
          <div className="auth-page">
            <h1>Student Registration</h1>
            <form onSubmit={handleSubmit} className="auth-form">
              <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
              <input type="text" name="address" placeholder="Home Address" value={formData.address} onChange={handleChange} required />
              <input type="text" name="guardianName" placeholder="Guardian's Full Name" value={formData.guardianName} onChange={handleChange} required />
              <input type="tel" name="guardianPhone" placeholder="Guardian's Phone Number" value={formData.guardianPhone} onChange={handleChange} required />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
              <button type="submit">Register</button>
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
