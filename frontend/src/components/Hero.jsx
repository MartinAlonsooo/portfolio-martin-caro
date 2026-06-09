function Hero() {
  return (
    <section className="hero-section">

      <div className="container">

        <div className="row align-items-center">

          <div
            className="col-lg-7"
            data-aos="fade-right"
          >

            <h1 className="display-2 fw-bold text-white">
              Martin Caro
            </h1>

            <h2 className="text-info mb-4">
              Analista Programador
              <br />
              Full Stack Developer
            </h2>

            <p className="lead mb-4">
              Desarrollo aplicaciones web modernas utilizando
              Django, React, Python y MySQL. Me especializo en
              crear soluciones Full Stack, sistemas empresariales,
              automatización e integración de Inteligencia Artificial.
            </p>

            <div className="d-flex gap-3 flex-wrap">

              <a
                href="#proyectos"
                className="btn btn-primary btn-lg"
              >
                Ver Proyectos
              </a>

              <a
                href="/CV2.pdf"
                download
                className="btn btn-outline-light btn-lg"
              >
                Descargar CV
              </a>

              <a
                href="#contacto"
                className="btn btn-outline-info btn-lg"
              >
                Contactarme
              </a>

            </div>

          </div>

          <div
            className="col-lg-5 text-center"
            data-aos="fade-left"
          >

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Martin Caro"
              className="hero-avatar"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero