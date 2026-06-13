import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const contacts = [
  {
    icon: Mail,
    label: 'Personal email',
    value: 'arpityadav7021@gmail.com',
    href: 'mailto:arpityadav7021@gmail.com',
  },
  {
    icon: Mail,
    label: 'University email',
    value: 'arpit.yadav232@lpu.in',
    href: 'mailto:arpit.yadav232@lpu.in',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9936171165',
    href: 'tel:+919936171165',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
  },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Acnologia7021',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/arpit-yadav-0b6183244',
  },
]

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-card reveal">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let us build something useful.</h2>
          <p>
            I am open to internships and entry-level roles in AI automation,
            software systems, workflow tooling, and applied machine learning.
          </p>
        </div>

        <div className="contact-grid">
          {contacts.map(item => {
            const Icon = item.icon
            const content = (
              <>
                <Icon size={20} />
                <span>
                  <small>{item.label}</small>
                  {item.value}
                </span>
              </>
            )

            return item.href ? (
              <a className="contact-item" href={item.href} key={item.label}>
                {content}
              </a>
            ) : (
              <div className="contact-item" key={item.label}>
                {content}
              </div>
            )
          })}
        </div>

        <div className="contact-actions">
          {socialLinks.map(link => (
            <a
              className="hero-btn secondary"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={link.label}
            >
              {link.label}
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
