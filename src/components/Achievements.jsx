import { CheckCircle2, Trophy } from 'lucide-react'

const achievements = [
  'Solved 150+ LeetCode problems with a focus on logic building and implementation speed.',
  'Built an AI certificate-tampering module that achieved 96.88% accuracy on modified certificate elements.',
  'Created automation workflows that connect YouTube, LinkedIn, SEO analysis, webhooks, and LLM agents.',
  'Hands-on experience with OCR, synthetic data generation, NLP, and API-driven automation.',
]

function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="section-heading reveal">
        <p className="eyebrow">Highlights</p>
        <h2>Signals worth noticing.</h2>
      </div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <article className="achievement-card reveal" key={achievement}>
            {index === 0 ? <Trophy size={22} /> : <CheckCircle2 size={22} />}
            <p>{achievement}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Achievements
