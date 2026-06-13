import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'Profile' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <a className="nav-logo" href="#hero" onClick={() => setMenuOpen(false)}>
        <span>AY</span>
        Arpit Yadav
      </a>

      <button
        className="nav-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(current => !current)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <ul className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        {navItems.map(item => (
          <li key={item.href}>
            <a href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
