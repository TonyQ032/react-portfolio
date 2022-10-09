import React from "react";
import Project from "./Project";
import "../../styles/project.css";

// Importing project screenshots
import techBlog from "../../assets/project-img/tech-blog.png";
import popUmai from "../../assets/project-img/pop-umai.png";
import platello from "../../assets/project-img/platello.png";
import employeeTracker from "../../assets/project-img/employee-tracker.png";
import socialNetwork from "../../assets/project-img/social-network-api.png";
import codingQuiz from "../../assets/project-img/coding-quiz.png";

function ProjectPage() {
  return (
    <section className="section-container">
      <h2 className="container-title">Projects</h2>
      <div className="project-container">
        <Project
          title="Tony's Tech Blog"
          src={techBlog}
          deployedLink="https://tony-tech-blog.herokuapp.com"
          sourceLink="https://github.com/TonyQ032/Tonys-Tech-Blog"
          alt="Screenshot of Tony's Tech Blog homepage"
        />

        <Project
          title="Pop Umai Website"
          src={popUmai}
          deployedLink="https://pop-umai.herokuapp.com"
          sourceLink="https://github.com/PreDevz/POP-Umai"
          alt="Screenshot of Pop Umai's homepage"
        />

        <Project
          title="Platello"
          src={platello}
          deployedLink="https://predevz.github.io/Platello/"
          sourceLink="https://github.com/PreDevz/Platello"
          alt="Screenshot of Platello's homepage"
        />

        <Project
          title="Employee Tracker"
          src={employeeTracker}
          deployedLink=""
          sourceLink="https://github.com/TonyQ032/Employee-Tracker"
          alt="Screenshot of Employee Tracker app running in a MacOS terminal"
        />

        <Project
          title="Social Network API"
          src={socialNetwork}
          deployedLink=""
          sourceLink="https://github.com/TonyQ032/Social-Network-API"
          alt="Screenshot of API data retrieved in Insomnia"
        />

        <Project
          title="Coding Quiz"
          src={codingQuiz}
          deployedLink="https://tonyq032.github.io/Coding-Quiz/"
          sourceLink="https://github.com/TonyQ032/Coding-Quiz"
          alt="Screenshot of coding quiz"
        />
      </div>
    </section>
  );
}

export default ProjectPage;
