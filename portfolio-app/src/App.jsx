"use client"

import Header from "./components/Header"
import Hero from "./components/Hero"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Distinction from "./components/Distinction"
import Footer from "./components/Footer"
import "./App.css"
import { initGlobalAnimations } from "./utils/GlobalAnimations"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const observer = initGlobalAnimations()

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="App">
      <div className="min-h-screen bg-background-primary">
        <Header />
        <main className="relative">
          <Hero />
          <div className="container">
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Distinction />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
