import React from "react";
import Navbar from "./Navbar";
import "../styles/header.css";

function Header() {
  return (
    <>
      <header>
        <a href="#" className="nav-branding">
          Anthony Quinones
        </a>
        <Navbar />
      </header>
      <div className="hero-section">
        <div className="text-container">
          <p>Hello, my name is</p>
          <h1>Anthony Quinones</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
