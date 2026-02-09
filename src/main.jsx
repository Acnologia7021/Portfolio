import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// ---- ADD THIS BELOW ----
window.addEventListener('scroll', () => {
  document.querySelectorAll('.reveal').forEach(el => {
    const top = el.getBoundingClientRect().top
    const trigger = window.innerHeight * 0.85

    if (top < trigger) {
      el.classList.add('active')
    }
  })
})

// trigger once on load
window.dispatchEvent(new Event('scroll'))
