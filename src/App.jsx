import React, { useState } from 'react'
import Header from './components/Header'
import AboutMe from './components/Aboutme'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'

import './styles/App.css'
import './styles/project.css'

function App() {
  const [currentSection, setCurrentSection] = useState('About Me')

  const renderSection = () => {
    switch (currentSection) {
      case 'Portfolio':
        return <Portfolio />
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />
      default:
        return <AboutMe />
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