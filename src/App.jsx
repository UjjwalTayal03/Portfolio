import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="scroll-smooth">
      <Navbar />
      {/* Added responsive width for smaller screens */}
      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  )
}

export default App
