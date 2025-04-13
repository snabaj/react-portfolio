import React from 'react';

function Resume() {
    return (
    <section>
      <h2>Resume</h2>
      <p>Download my <a href="#" download> Resume</a></p>
      <h3>Front-end proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>TypeScript</li>
      </ul>
      <h3>Back-end proficiencies</h3>
      <ul>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Servers & APIs</li>
        <li>JWT Authentication</li>
      </ul>
      <h3>Other</h3>
      <ul>
        <li>GitHub Version Control</li>
        <li>Prompt Engineering</li>
        <li>Testing and Deployment</li>
      </ul>
    </section>
    );
};

export default Resume;