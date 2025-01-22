import React from 'react';
import Project from './Project';
import typescriptApp from '../assets/images/vehicle-builder.png';
import weatherDashboard from '../assets/images/weather-dash.png';
import sqlApp from '../assets/images/employee-track.png';
import reactApp from '../assets/images/react-portfolio2.png';
import readmeGen from '../assets/images/readme-generator.png';
import triviaGame from '../assets/images/trivia-game.png';

function Portfolio() {
    const projects = [
      {
        title: "Typescript: Vehicle Builder",
        imageSrc: typescriptApp,
        repoLink: "https://github.com/snabaj/typescript-command-line-app",
      },
      {
        title: "SQL: Employee Tracker",
        imageSrc: sqlApp,
        repoLink: "https://github.com/snabaj/SQL-employee-tracker",
      },
      {
        title: "Servers and APIs: Weather Dashboard",
        imageSrc: weatherDashboard,
        repoLink: "https://github.com/snabaj/fullstack-weather-dashboard-app",
      },
      {
        title: "React: Portfolio",
        imageSrc: reactApp,
        repoLink: "https://github.com/snabaj/react-portfolio",
      },
        {
            title: "Node JS: Readme Generator",
            imageSrc: readmeGen,
            repoLink: "https://github.com/snabaj/readme-generator-app",
        },
        {
            title: "Projects: Trivia Game",
            imageSrc: triviaGame,
            repoLink: "https://dchica25.github.io/Trivia-game-project/"
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