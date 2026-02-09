import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <>
     
      <Navbar />

      <main className="content-wrapper">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}

export default App
