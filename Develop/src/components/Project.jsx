import React from "react";

function Project({ title, appLink, repoLink }) {
    <div className="project">
      <h3>{title}</h3>
      <a href={appLink} target="_blank" rel="noopener noreferrer">
        <img src="https://via.placeholder.com/150" alt={`${title} Placeholder`} />
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
};

export default Project;