import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import './index.css'

import AOS from 'aos'
import App from './App.jsx'

AOS.init({
  duration: 1000,
  once: true
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)