import React from "react";

function Project({ title, description, imageSrc, deployedLink, repoLink }) {
  return (
    <div className="project-card">
      <img src={imageSrc} alt={title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p>{description}</p>
        <div className="project-buttons">
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
