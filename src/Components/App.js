import React, { useState } from 'react'

import Menu from "./Menu"
import Hero from "./Hero"
import Education from "./Education"
import Abilities from "./Abilities"
import Projects from "./Projects"
import Contact from "./Contact"

import '../Style/App.css'

function App() {
  const [title, setTitle] = useState("My Menu")

    // Add in Scroll Magic to update the Menu Title 

  return (
    <React.Fragment>
      <Menu title={title} />
      <Hero />
      <Education />
      <Abilities />
      <Projects />
      <Contact />
    </React.Fragment>
  )
}

export default App;
