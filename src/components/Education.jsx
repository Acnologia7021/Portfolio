import { GraduationCap, MapPin } from 'lucide-react'

const education = [
  {
    school: 'Lovely Professional University',
    location: 'Punjab, India',
    program: 'Bachelor of Technology - Computer Science and Engineering',
    period: 'Since August 2023',
  },
  {
    school: 'Central Academy, Indira Nagar',
    location: 'Lucknow, India',
    program: 'Intermediate',
    period: 'April 2021 - March 2022',
    detail: 'Percentage: 80%',
  },
  {
    school: 'Central Academy, Indira Nagar',
    location: 'Lucknow, India',
    program: 'Matriculation',
    period: 'April 2018 - March 2019',
    detail: 'Percentage: 75%',
  },
]

function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-heading reveal">
        <p className="eyebrow">Education</p>
        <h2>Academic foundation.</h2>
      </div>

      <div className="timeline">
        {education.map(item => (
          <article className="timeline-item reveal" key={`${item.school}-${item.program}`}>
            <div className="timeline-marker">
              <GraduationCap size={20} />
            </div>
            <div>
              <p className="timeline-period">{item.period}</p>
              <h3>{item.program}</h3>
              <p className="timeline-school">{item.school}</p>
              <p className="timeline-location">
                <MapPin size={16} />
                {item.location}
              </p>
              {item.detail && <p className="timeline-detail">{item.detail}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
