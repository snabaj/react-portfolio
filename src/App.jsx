import React, { useState } from 'react'
import Header from './components/Header'
import AboutMe from './components/Aboutme'
import Portfolio from './components/Home'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

import './styles/App.css'
import './styles/project.css'

function App() {
  const [currentSection, setCurrentSection] = useState('Portfolio')

  const renderSection = () => {
    switch (currentSection) {
      case 'About Me':
        return <AboutMe />
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />
      default:
        return <Portfolio />
    }
  }

  return (
    <div>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  )
}

export default App;