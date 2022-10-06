import React from "react";
import "../styles/footer.css";
import Resume from "../assets/AnthonyQ-Resume.pdf";

function Footer() {
  return (
    <footer>
      <h3>Check me out! :</h3>

      <a
        href="https://github.com/TonyQ032"
        target="_blank"
        className="icon-container"
      >
        <i class="bi bi-github"></i>
        <p>GitHub</p>
      </a>

      <a
        href="https://www.linkedin.com/in/anthony-quinones/"
        target="_blank"
        className="icon-container"
      >
        <i class="bi bi-linkedin"></i>
        <p>LinkedIn</p>
      </a>

      <a href={Resume} target="_blank" className="icon-container">
        <i class="bi bi-person-circle fa-3x"></i>
        <p>Resume</p>
      </a>
    </footer>
  );
}

export default Footer;
