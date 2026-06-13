import { ExternalLink, Newspaper, ShieldCheck, Workflow } from 'lucide-react'

const projects = [
  {
    icon: Workflow,
    title: 'N8n Agentic AI',
    period: 'Sep 2025 - Oct 2025',
    description:
      'Designed an autonomous multi-agent workflow that streamlines end-to-end digital content operations with minimal human input.',
    highlights: [
      'Automated YouTube SEO, thumbnail creation, uploads, LinkedIn posting, and web SEO analysis.',
      'Added LLM-based agents that plan tasks, take actions, and improve outputs using feedback.',
    ],
    tech: [
      'n8n',
      'OpenAI / Generative AI APIs',
      'YouTube Data API',
      'LinkedIn API',
      'REST',
      'Webhooks',
    ],
    link: 'https://github.com/Acnologia7021/N8n_Agentic_Ai',
    linkLabel: 'View Repository',
  },
  {
    icon: Newspaper,
    title: 'Agentic AI News Summarizer',
    period: 'Jul 2025 - Aug 2025',
    description:
      'Developed an intelligent news summarization system using web scraping, NLP techniques, and LLM-based reasoning.',
    highlights: [
      'Extracts full article content from URLs and generates concise, context-aware summaries.',
      'Improves context relevance and semantic understanding through a configurable LLM workflow.',
    ],
    tech: ['Python', 'LangChain', 'OpenAI API', 'Anthropic API', 'NLP'],
    link: 'https://github.com/Acnologia7021/News_Research',
    linkLabel: 'View Repository',
  },
  {
    icon: ShieldCheck,
    title: 'Blockchain-Based Certificate Validation System',
    period: 'Apr 2025 - May 2025',
    description:
      'Built the AI verification module for a certificate validation system focused on detecting fake or modified certificate elements.',
    highlights: [
      'Created an OCR pipeline to extract and clean certificate text for verification.',
      'Used CNN and MobileNetV2 with synthetic certificates to reach 96.88% tamper-detection accuracy.',
    ],
    tech: [
      'Python',
      'OpenCV',
      'Tesseract OCR',
      'TensorFlow/Keras',
      'MobileNetV2',
      'Pandas',
      'NumPy',
    ],
    link: 'https://github.com/Acnologia7021',
    linkLabel: 'GitHub Profile',
  },
]

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-heading reveal">
        <p className="eyebrow">Selected work</p>
        <h2>Projects with automation, AI, and measurable outcomes.</h2>
      </div>

      <div className="projects-grid">
        {projects.map(project => {
          const Icon = project.icon

          return (
            <article className="project-card reveal" key={project.title}>
              <div className="project-topline">
                <div className="card-icon">
                  <Icon size={22} />
                </div>
                <span>{project.period}</span>
              </div>

              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map(highlight => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className="tag-list">
                {project.tech.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.linkLabel}
                <ExternalLink size={16} />
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
