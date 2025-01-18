import React from "react";

function Project({ title, imageSrc, repoLink }) {
    return (
      <div className="project">
        <h3>{title}</h3>
        <img src={imageSrc} alt={title} className="project-image" />
        <a href={repoLink} className="repo-link" target="_blank" rel="noopener noreferrer">
          GitHub repository
        </a>
      </div>
    );
  }

export default Project;