import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="row">

          {/* Información */}

          <div className="col-lg-4 mb-4">

            <h3 className="text-info">
              Martin Caro
            </h3>

            <p>
              Analista Programador especializado en
              desarrollo Full Stack con Django,
              React, Python y MySQL.
            </p>

          </div>

          {/* Navegación */}

          <div className="col-lg-4 mb-4">

            <h4>
              Navegación
            </h4>

            <ul className="list-unstyled">

              <li>
                <a href="#sobre">
                  Sobre Mí
                </a>
              </li>

              <li>
                <a href="#tecnologias">
                  Tecnologías
                </a>
              </li>

              <li>
                <a href="#proyectos">
                  Proyectos
                </a>
              </li>

              <li>
                <a href="#contacto">
                  Contacto
                </a>
              </li>

            </ul>

          </div>

          {/* Redes */}

          <div className="col-lg-4 mb-4">

            <h4>
              Contacto
            </h4>

            <div className="d-flex gap-3 mt-3">

              <a
                href="https://github.com/mcaroberrios"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
              >
                <FaGithub size={28} />
              </a>

              <a
                href="#"
                className="social-icon"
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href="mailto:mcaroberrios@gmail.com"
                className="social-icon"
              >
                <FaEnvelope size={28} />
              </a>

            </div>

          </div>

        </div>

        <hr />

        <div className="text-center">

          <p className="mb-0">

            <FaCode className="me-2" />

            © 2026 Martin Caro | Portfolio Full Stack Developer

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;