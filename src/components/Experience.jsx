import { Briefcase, Code2 } from 'lucide-react'

const experience = [
  {
    icon: Briefcase,
    title: 'Applied AI and Automation Practice',
    meta: 'Self-directed project work',
    points: [
      'Designed workflow automation pipelines around APIs, orchestration logic, and event-driven actions.',
      'Built LLM-assisted systems for content operations, news summarization, and certificate verification.',
      'Focused on reducing manual effort while keeping workflows readable and adaptable.',
    ],
  },
  {
    icon: Code2,
    title: 'Problem Solving and Computer Science',
    meta: 'Academic and coding practice',
    points: [
      'Solved 150+ LeetCode problems to strengthen data structures, algorithms, and implementation speed.',
      'Built academic and independent projects using Python, JavaScript, C, and C++.',
      'Practiced logic building, debugging, and clean project organization through hands-on coursework.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-heading reveal">
        <p className="eyebrow">Experience</p>
        <h2>Hands-on practice shaped around buildable systems.</h2>
      </div>

      <div className="experience-list">
        {experience.map(item => {
          const Icon = item.icon

          return (
            <article className="experience-card reveal" key={item.title}>
              <div className="card-icon">
                <Icon size={22} />
              </div>
              <h3>{item.title}</h3>
              <p className="experience-meta">{item.meta}</p>
              <ul>
                {item.points.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
