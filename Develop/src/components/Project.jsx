import React from "react";

    function Project({ title, imageSrc, repoLink }) {
        const handleIconClick = () => {
          window.open(repoLink, "_blank", "noopener, noreferrer");
        };

        return (
            <div className="project">
            <img src={imageSrc} alt={title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{title}</h3>
              <i
                className="fab fa-github repo-icon"
                onClick={handleIconClick}
                title={`View ${title} on GitHub`}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          </div>
        );
      }

export default Project;