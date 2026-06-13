import { Brain, Code2, Cpu, Database, Laptop, Workflow } from 'lucide-react'

const skills = [
  {
    icon: Code2,
    title: 'Languages',
    items: ['C++', 'JavaScript', 'C', 'Python'],
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    items: ['NumPy', 'Pandas', 'scikit-learn', 'TensorFlow/Keras'],
  },
  {
    icon: Workflow,
    title: 'Automation',
    items: ['n8n', 'REST APIs', 'Webhooks', 'Automation Pipelines'],
  },
  {
    icon: Cpu,
    title: 'AI Tooling',
    items: ['LangChain', 'OpenAI APIs', 'Anthropic APIs', 'Generative AI APIs'],
  },
  {
    icon: Database,
    title: 'Data and Vision',
    items: ['OpenCV', 'Tesseract OCR', 'Synthetic Data', 'Data Analysis'],
  },
  {
    icon: Laptop,
    title: 'Developer Tools',
    items: ['GitHub', 'VS Code', 'Jupyter Notebook', 'Git'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-heading reveal">
        <p className="eyebrow">Technical toolkit</p>
        <h2>Skills that support real implementation.</h2>
      </div>

      <div className="skills-grid">
        {skills.map(skill => {
          const Icon = skill.icon

          return (
            <article className="skill-card reveal" key={skill.title}>
              <div className="card-icon">
                <Icon size={22} />
              </div>
              <h3>{skill.title}</h3>
              <div className="tag-list">
                {skill.items.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
