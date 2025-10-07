import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='scroll-smooth'>
      <Navbar/>
      <div className='w-7/12 m-auto'> 
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      
      </div>
    </div>
  )
}

export default App
