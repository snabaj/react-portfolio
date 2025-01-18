import React from 'react';

// Navigation Component
  const Navigation = ({ currentSection, setCurrentSection }) => (
    <nav>
      {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
        <button
          key={section}
          className={currentSection === section ? 'active' : ''}
          onClick={() => setCurrentSection(section)}
        >
          {section}
        </button>
      ))}
    </nav>
  );
  
  // About Me Section
  const AboutMe = () => (
    <section>
      <h2>About Me</h2>
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
      <p>Hi, I'm Snabajja, a passionate developer creating engaging web applications.</p>
    </section>
  );

  export default Navigation;
    export { AboutMe };