import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Estadisticas from './components/Estadisticas'
import SobreMi from './components/SobreMi'
import Tecnologias from './components/Tecnologias'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Experiencia from './components/Experiencia'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Estadisticas />
      <SobreMi />
      <Tecnologias />
      <Experiencia />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  )
}

export default App