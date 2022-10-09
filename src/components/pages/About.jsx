import React from "react";
import ProfilePic from "../../assets/img/me-profile.png";
import "../../styles/about.css";

function About() {
  return (
    <section className="section-container">
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

      <div className="middle-row">
        <div className="m-column">
          <h2 className="about-header">About Me</h2>
          <p>
            My name is Anthony Quinones and I am a Rialto-based software
            engineer and educator! I am currently working as a Substitute
            Teacher and Guest Teacher at the Fontana and San Bernardino Unified
            School Districts respectively. I am now looking for opportunities to
            start the next chapter of my career!
            <br /> <br /> I am always excited to learn new skills and concepts
            and I am ready for wherever life takes me next!
          </p>
        </div>

        <div className="m-column">
          <h2 className="about-header">Education</h2>

          <div className="ed-container">
            <h3 className="school-name bold">
              University of California, Riverside
            </h3>
            <p>UCR Extension Professional Studies Certificate of Completion</p>
            <p>May 2022 – October 2022</p>
          </div>

          <div className="ed-container">
            <h3 className="school-name bold">
              California State University, San Bernardino
            </h3>
            <p>BA in History (Teaching Track) - Magna Cum Laude - GPA: 3.801</p>
            <p>September 2017 – May 2021</p>
          </div>
        </div>
      </div>

      <div className="bottom-row">
        <h2 className="about-header">Experience</h2>

        <div className="ed-container">
          <h3 className="school-name bold">Fontana Unified School District</h3>
          <p>Substitute Teacher</p>
          <p>October 2021 – Present</p>
        </div>

        <div className="ed-container">
          <h3 className="school-name bold">
            San Bernardino Unified School District
          </h3>
          <p>Guest Teacher</p>
          <p>October 2021 – Present</p>
        </div>

        <div className="ed-container">
          <h3 className="school-name bold">Pop Umai</h3>
          <p>Freelance - Full-Stack Software Engineer</p>
          <p>September 2022 – October 2022</p>
        </div>
      </div>
    </section>
  );
}

export default About;
