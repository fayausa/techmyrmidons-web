import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
      <img src="/assets/tm-logo.png" className="Navbar_image" alt="logo"></img>
      <ul>
        <li><a href="#">Tools</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">People</a></li>
      </ul>
    </nav>
  )
}

export default Navbar