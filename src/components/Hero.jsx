import profile from '../assets/profile.png'

function Hero() {
  return (
    <section id="hero" className="hero">
      
      <div className="hero-content reveal">
        <h1>Arpit Yadav</h1>

        <p className="hero-subtitle">
          Machine Learning • Automation • Intelligent Systems
        </p>

        <p className="hero-description">
          I design and build intelligent systems that automate workflows,
          analyze data, and turn complex problems into scalable solutions.
        </p>

        <p className="hero-description">
          My interests lie at the intersection of machine learning,
          automation, and real-world system design.
        </p>

        <p className="hero-cta">
          Scroll down to explore my skills, projects, and experience.
        </p>

        {/* Hero Links */}
        <div className="hero-links">
          <a
            href="/Arpit_Yadav_CV.pdf"
            className="hero-btn primary"
            download
          >
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/arpit-yadav-0b6183244"
            className="hero-btn secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-circle">
          <img src={profile} alt="Arpit Yadav" />
        </div>
      </div>

    </section>
  )
}

export default Hero
