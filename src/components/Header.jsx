import React from "react";
import Navbar from "./Navbar";
import "../styles/header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <header>
        <a href="#" className="nav-branding">
          Anthony Quinones
        </a>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
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
