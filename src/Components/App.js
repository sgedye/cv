import React from 'react'
import Menu from "./Menu"
import Hero from "./Hero"
import Education from "./Education"
import Abilities from "./Abilities"
import Projects from "./Projects"
import Contact from "./Contact"

import '../Style/App.css'

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Education />
      <Abilities />
      <Projects />
      <Contact />
    </React.Fragment>
  )
}

export default App;
