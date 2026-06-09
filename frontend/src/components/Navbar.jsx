function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        <a className="navbar-brand fw-bold fs-4" href="#">
          Martin Caro
        </a>

        <div className="d-flex gap-3">

          <a className="nav-link text-white" href="#sobre">
            Sobre Mí
          </a>

          <a className="nav-link text-white" href="#tecnologias">
            Tecnologías
          </a>

          <a className="nav-link text-white" href="#proyectos">
            Proyectos
          </a>

          <a className="nav-link text-white" href="#contacto">
            Contacto
          </a>

        </div>

      </div>
    </nav>
  )
}

export default Navbar