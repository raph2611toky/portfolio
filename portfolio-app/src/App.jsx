import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Distiction from './components/Distinction'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Distiction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;