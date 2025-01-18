import React, { useState } from 'react';
import Navigation from './Navigation';

// Header Component
const Header = ({ currentSection, setCurrentSection }) => (
    <header>
      <h1>Stella Nabajja</h1>
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </header>
  );
  
    export default Header;
  