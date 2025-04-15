import React from "react";
import Project from "./Project";

import typescriptApp from "../assets/images/vehicle-builder.png";
import sqlApp from "../assets/images/employee-track.png";
import reactApp from "../assets/images/Port-homepage.jpg";
import readmeGen from "../assets/images/readme-generator.png";
import socialApi from "../assets/images/Social-api.jpg";
import weaverApp from "../assets/images/weaver-app2.jpg";
import testingCypress from "../assets/images/E2E-test2.jpg";
import renderDeploy from "../assets/images/Render-deploy.jpg";
import bookSearch from "../assets/images/book-search.png";
import careerGist from "../assets/images/career-gist.jpg";
import kanbanBoard from "../assets/images/kanban-board.png";
import candidateSearch from "../assets/images/candidate-search.png";
//import weatherDashboard from '../assets/images/weather-dash.png';

function Portfolio() {
  const projects = [
    {
      title: "Weaver App",
      description:
        "I collaborated on a social media platform made for creatives and story tellers.",
      imageSrc: weaverApp,
      deployedLink: "https://weaver-9su3.onrender.com/",
      repoLink: "https://github.com/ccasalme/Weaver",
    },
    {
      title: "Testing with Cypress",
      description:
        "I enhance a fully functioning Tech Quiz application by adding Cypress for both component and end-to-end testing.",
      imageSrc: testingCypress,
      deployedLink:
        "https://drive.google.com/file/d/1P6qn4crjZkXYAXJ4WpwGAZasHFRcZ_vH/view",
      repoLink: "https://github.com/snabaj/testing-with-cypress",
    },
    {
      title: "GitHub Actions CI/CD",
      description:
        "I create a CI/CD pipeline using GitHub Actions to run the component tests via Cypress when a Pull Request is made to the develop branch.",
      imageSrc: renderDeploy,
      deployedLink: "https://github-actions-ci-cd-4kk7.onrender.com/",
      repoLink: "https://github.com/snabaj/github-actions-CI-CD",
    },
    {
      title: "Book Search Engine",
      description:
        "I refactor a fully functioning Google Books API search engine built with a RESTful API to use GraphQL API built with Apollo Server.",
      imageSrc: bookSearch,
      deployedLink: "https://book-search-engine-ulcz.onrender.com/",
      repoLink: "https://github.com/snabaj/book-search-engine",
    },
    {
      title: "Career Gist",
      description:
        "I collaborated on an advanced job board aggregator designed to streamline the job search process by fetching listings from the JSearch API.",
      imageSrc: careerGist,
      deployedLink: "https://careergist.onrender.com/",
      repoLink: "https://github.com/nathangreen1632/career-gist",
    },
    {
      title: "Kanban Board",
      description:
        "A full-stack application that uses JSON Web Tokens to provide a secure and scalable method for verifying user identities.",
      imageSrc: kanbanBoard,
      deployedLink: "https://kanban-board-application-rv08.onrender.com",
      repoLink: "https://github.com/snabaj/kanban-board-application",
    },
    {
      title: "Candidate Search App",
      description:
        "An application that uses React and TypeScript to call the GitHub API and render data in the browser.",
      imageSrc: candidateSearch,
      deployedLink:
        "https://drive.google.com/file/d/1kiDNWL6drCGyRIGvGYJj1UQ3hrLHnhtz/view",
      repoLink: "https://github.com/snabaj/candidate-search-application",
    },
    {
      title: "Social Network API",
      description:
        "An API for a social network web application where users can share their thoughts and reactions with friends.",
      imageSrc: socialApi,
      deployedLink:
        "https://drive.google.com/file/d/1fSbMlApanz75PKGDuCi1Zfrl9omLJfzK/view",
      repoLink: "https://github.com/snabaj/social-network-API",
    },
    {
      title: "Typescript Vehicle Builder",
      description: "A vehicle builder app generated using Typescript.",
      imageSrc: typescriptApp,
      deployedLink:
        "https://drive.google.com/file/d/1EJHnGsXYUiMuCwzzIyhQYRwTlAu-u2sd/view",
      repoLink: "https://github.com/snabaj/typescript-command-line-app",
    },
    {
      title: "SQL Employee Tracker",
      description:
        "A command-line app that manages a company's employee database using Node.JS, Inquirer, and PostgreSQL.",
      imageSrc: sqlApp,
      deployedLink:
        "https://drive.google.com/file/d/1eqGCgxw-uTBpamuNhoREr1FEvkaE3mFY/view",
      repoLink: "https://github.com/snabaj/SQL-employee-tracker",
    },
    // {
    //   title: "Servers and APIs: Weather Dashboard",
    //   description: "A weather dashboard that displays current weather and 5-day forecast using OpenWeather API.",
    //   imageSrc: weatherDashboard,
    //   deployedLink: "https://full-stack-weather-forecast-application.onrender.com",
    //   repoLink: "https://github.com/snabaj/fullstack-weather-dashboard-app",
    // },
    {
      title: "React Portfolio (this site)",
      description: "A portfolio website built using React.",
      imageSrc: reactApp,
      deployedLink: "https://stellas-portfolio.netlify.app/",
      repoLink: "https://github.com/snabaj/react-portfolio",
    },
    {
      title: "Node JS Readme Generator",
      description:
        "A command-line application that generates a README file for your project using Node.js and Inquirer.",
      imageSrc: readmeGen,
      deployedLink:
        "https://drive.google.com/file/d/1EcPv8fS-OgUFH13RiSYX4JG0gmbMrDTG/view",
      repoLink: "https://github.com/snabaj/readme-generator-app",
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
