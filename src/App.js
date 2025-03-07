import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Portal from './pages/Portal'
import Register from './pages/Register'
import Report from './pages/Reportaproblem'



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reportaproblem" element={<Report/>} />
      
    </Routes> 
  )
}
