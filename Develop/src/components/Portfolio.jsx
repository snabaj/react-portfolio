import React from 'react';
import Project from './Project';

function Portfolio() {
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Project
            key={num}
            title={`Project ${num}`}
            appLink={`#deployed-app-${num}`}
            repoLink={`#github-repo-${num}`}
          />
        ))}
      </div>
    </section>
};

export default Portfolio;