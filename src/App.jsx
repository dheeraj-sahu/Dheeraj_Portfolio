import React, { useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Skill from "./components/Skill"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Aos from "aos";
import "aos/dist/aos.css"
function App() {
useEffect (()=>{
  Aos.init();
},[])
  return (
    <div>
      <Navbar/>
     <div className="container">
     <Home/>
     <About/>
     <Experience/>
     <Skill/>
     <Projects/>
     <Contact/>
     
     </div>


    </div>
  )
}

export default App
