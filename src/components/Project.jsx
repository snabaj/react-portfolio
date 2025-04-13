import React from "react";

function Project({ title, description, imageSrc, deployedLink, repoLink }) {
  // const handleIconClick = () => {
  //   window.open(repoLink, "_blank", "noopener, noreferrer");
  // };

  return (
    <div className="project">
      <img src={imageSrc} alt={title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        {/* <i
                className="fab fa-github repo-icon"
                onClick={handleIconClick}
                title={`View ${title} on GitHub`}
                style={{ cursor: "pointer" }}
              ></i> */}
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
