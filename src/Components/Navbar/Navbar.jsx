import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img
          src="/assets/tm-logo.png"
          className="Navbar_image"
          alt="logo"
        ></img>
      </Link>
      <ul>
        <li>
          <a href="#topics">Tools</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#people">People</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
