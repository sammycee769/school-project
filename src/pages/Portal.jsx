import React,{ useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/nav'

export default function Portal() {
 const [formData, setFormData] = useState({ email: "", password: "" });

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!formData.email || !formData.password) {
    alert("Please enter both email and password.");
    return;
  }

  alert("Login successful! Welcome back.");
  setFormData({ email: "", password: "" });
};

return (
    <>
   <Nav/>
  <div className="auth-page">
    <h1>Student Login</h1>
    <form onSubmit={handleSubmit} className="auth-form">
      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Login</button>
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
