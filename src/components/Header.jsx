import React from 'react';
import Navigation from './Navigation';

function Header({ currentSection, setCurrentSection }) {
    return (
    <header>
      <h1>Stella Nabajja</h1>
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </header>
    );
};
  
export default Header;
  