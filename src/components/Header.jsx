import React from "react";
import Navbar from "./Navbar";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <a href="#" className="nav-branding">
        Anthony Quinones
      </a>
      <Navbar />
    </header>
  );
}

export default Header;
