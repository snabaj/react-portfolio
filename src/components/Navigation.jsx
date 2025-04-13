import React from 'react';

  function Navigation({ currentSection, setCurrentSection }) {
    return (
    <nav>
      {['Home', 'About Me', 'Contact', 'Resume'].map((section) => (
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
  };
  
  export default Navigation;