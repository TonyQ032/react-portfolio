import React from "react";

function Project({ title, src, deployedLink, sourceLink, alt }) {
  if (deployedLink) {
    return (
      <article className="project">
        <h2 className="project-title">Project title</h2>
        <img className="project-img" src={src} alt="project image" />
        <div className="button-container">
          <a href="">
            <button>Deployed App</button>
          </a>
          <a href="">
            <button>Source Code</button>
          </a>
        </div>
      </article>
    );
  } else {
    return (
      <article className="project">
        <h2 className="project-title">Project title</h2>
        <img className="project-img" src={src} alt="project image" />
        <div className="button-container">
          <button>Source Code</button>
        </div>
      </article>
    );
  }
}

export default Project;
