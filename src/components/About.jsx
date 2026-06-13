import { Bot, Brain, CheckCircle2, Workflow } from 'lucide-react'

const focusAreas = [
  {
    icon: Workflow,
    title: 'Agentic Workflows',
    text: 'Automating multi-step digital operations with n8n, APIs, webhooks, and LLM agents.',
  },
  {
    icon: Brain,
    title: 'AI and NLP Systems',
    text: 'Building summarization, research, and analysis flows with Python and modern LLM tooling.',
  },
  {
    icon: Bot,
    title: 'Verification AI',
    text: 'Using OCR, CNNs, MobileNetV2, and synthetic data to detect tampering in certificates.',
  },
]

const strengths = [
  'Problem-solving and logic building',
  'Adaptable with fast hands-on learning',
  'Comfortable connecting models, APIs, and product workflows',
]

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-heading reveal">
        <p className="eyebrow">Profile</p>
        <h2>Engineer the workflow, then make it intelligent.</h2>
        <p>
          My work sits between software development, automation, and applied
          machine learning. I like building practical systems that reduce manual
          work, extract useful insight, and stay understandable enough to improve.
        </p>
      </div>

      <div className="about-grid">
        {focusAreas.map(area => {
          const Icon = area.icon

          return (
            <article className="focus-card reveal" key={area.title}>
              <Icon size={24} />
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          )
        })}
      </div>

      <div className="strength-strip reveal">
        {strengths.map(strength => (
          <span key={strength}>
            <CheckCircle2 size={18} />
            {strength}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About
