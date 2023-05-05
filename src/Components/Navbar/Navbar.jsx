import React, { useRef } from "react";
import "./Navbar.css";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { id } = useParams();
  const location = useLocation();
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("nav_popout");
    const body = document.querySelector("body");
    body.classList.toggle("inactive");
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          src="/assets/tm-logo.png"
          className="Navbar_image"
          alt="logo"
        ></img>
      </Link>
      <nav ref={navRef} id="ll">
        {location.pathname === "/" ? (
          <>
            <a href="#cards">Domains</a>
            <button className="nav-btn nav-close-btn">
              <FaTimes onClick={showNavBar} />
            </button>
          </>
        ) : (
          <>
            <a href="#topics">Tools</a>
            {id === "ai" ? <a href="#categories">Categories</a> : null}
            <a href="#blogs">Blogs</a>
            <a href="#people">People</a>
            <button className="nav-btn nav-close-btn">
              <FaTimes onClick={showNavBar} />
            </button>
          </>
        )}
      </nav>
      <button className="nav-btn">
        <FaBars onClick={showNavBar} />
      </button>
    </header>
  );
}

export default Navbar;
