import {
  ArrowUpRight,
  Code2,
  Download,
  ExternalLink,
  Mail,
  ShieldCheck,
  Trophy,
} from 'lucide-react'
import profile from '../assets/profile.png'

const heroStats = [
  { icon: Trophy, value: '150+', label: 'LeetCode problems solved' },
  { icon: ShieldCheck, value: '96.88%', label: 'AI tamper detection accuracy' },
  { icon: Code2, value: '3+', label: 'AI and automation projects' },
]

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content reveal">
        <p className="eyebrow">B.Tech CSE student / AI automation builder</p>
        <h1>Arpit Yadav</h1>

        <p className="hero-subtitle">
          I build automation-first AI systems that connect data, APIs, and real
          workflows into useful products.
        </p>

        <p className="hero-description">
          Currently pursuing Computer Science and Engineering at Lovely
          Professional University, with hands-on work in n8n agentic workflows,
          NLP research tools, OCR, and machine learning based validation.
        </p>

        <div className="hero-links">
          <a
            href={`${import.meta.env.BASE_URL}Arpit_Yadav_CV.pdf`}
            className="hero-btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} />
            Download CV
          </a>

          <a href="#contact" className="hero-btn secondary">
            <Mail size={18} />
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/arpit-yadav-0b6183244"
            className="hero-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
          >
            <ExternalLink size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/Acnologia7021"
            className="hero-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
          >
            <ArrowUpRight size={18} />
            GitHub
          </a>
        </div>

        <div className="hero-stats" aria-label="Resume highlights">
          {heroStats.map(stat => {
            const Icon = stat.icon

            return (
              <div className="hero-stat" key={stat.label}>
                <Icon size={20} />
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="hero-visual reveal">
        <div className="portrait-frame">
          <img src={profile} alt="Arpit Yadav portrait" />
        </div>

        <div className="hero-availability">
          <span>Open to internships and entry-level roles</span>
          <strong>AI / Automation / Software Systems</strong>
        </div>
      </div>
    </section>
  )
}

export default Hero
