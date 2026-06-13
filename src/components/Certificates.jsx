import { Award } from 'lucide-react'

const certificates = [
  {
    title: 'The Bits and Bytes of Computer Networking',
    date: 'September 2024',
  },
  {
    title: 'Introduction to Hardware and Operating Systems',
    date: 'September 2024',
  },
  {
    title: 'Machine Learning A-Z: Hands-On Python and R in Data Science',
    date: 'August 2023',
  },
]

function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="section-heading reveal">
        <p className="eyebrow">Certifications</p>
        <h2>Structured learning beyond coursework.</h2>
      </div>

      <div className="certificates-list">
        {certificates.map(certificate => (
          <article className="certificate-card reveal" key={certificate.title}>
            <div className="card-icon">
              <Award size={22} />
            </div>
            <h3>{certificate.title}</h3>
            <p>{certificate.date}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certificates
