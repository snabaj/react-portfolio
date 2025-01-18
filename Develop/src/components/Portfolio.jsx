import React from 'react';
import Project from './Project';
import typescriptApp from '../assets/images/typescript-app.png';
import weatherDashboard from '../assets/images/weather-dashboard.png';
import sqlApp from '../assets/images/employee-tracker.png';
import reactApp from '../assets/images/react-portfolio.png';

function Portfolio() {
    const projects = [
      {
        title: "Typescript",
        imageSrc: typescriptApp,
        repoLink: "https://github.com/snabaj/typescript-command-line-app",
      },
      {
        title: "SQL",
        imageSrc: sqlApp,
        repoLink: "https://github.com/snabaj/SQL-employee-tracker",
      },
      {
        title: "Servers ans APIs",
        imageSrc: weatherDashboard,
        repoLink: "https://github.com/snabaj/fullstack-weather-dashboard-app",
      },
      {
        title: "React",
        imageSrc: reactApp,
        repoLink: "https://github.com/snabaj/react-portfolio",
      },
    ];
  
    return (
      <section>
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              imageSrc={project.imageSrc}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </section>
    );
  }

export default Portfolio;