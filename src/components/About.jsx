import React from "react";
import ProfilePic from "../assets/img/me-profile.png";
import "../styles/about.css";

function About() {
  return (
    <div className="about-me-container">
      <div className="top-row">
        <img id="img-of-me" src={ProfilePic} alt="Image of myself" />
        <div className="about-info">
          <p>
            <span className="bold">Name: </span>Anthony Quinones
          </p>
          <p>
            <span className="bold">Title: </span>Full Stack Software Engineer
          </p>
          <p>
            <span className="bold">Email: </span>anthonyq032@gmail.com
          </p>
          <p>
            <span className="bold">Phone: </span>(909) 507-1224
          </p>
          <p>
            <span className="bold">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/anthony-quinones/"
              target="_blank"
              className="social-link"
            >
              Anthony-Quinones
            </a>
          </p>
          <p>
            <span className="bold">Github: </span>
            <a
              href="https://github.com/TonyQ032"
              target="_blank"
              className="social-link"
            >
              TonyQ032
            </a>
          </p>
        </div>
      </div>

      <div className="bottom-row">
        <div>
          <h2>About Me</h2>
          <p>Sample text</p>
        </div>

        <div>
          <h2>Experience</h2>
          <p>Sample text</p>
        </div>

        <div>
          <h2>Education</h2>
          <p>Sample text</p>
        </div>
      </div>
    </div>
  );
}

export default About;
