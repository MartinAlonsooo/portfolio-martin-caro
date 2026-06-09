import { FaPython, FaReact, FaGitAlt, FaGithub, FaJs } from "react-icons/fa";
import { SiDjango, SiMysql, SiBootstrap } from "react-icons/si";

function Tecnologias() {

  const tecnologias = [
    { nombre: "Python", icono: <FaPython size={55} color="#3776AB" /> },
    { nombre: "Django", icono: <SiDjango size={55} color="#44B78B" /> },
    { nombre: "React", icono: <FaReact size={55} color="#61DAFB" /> },
    { nombre: "JavaScript", icono: <FaJs size={55} color="#F7DF1E" /> },
    { nombre: "MySQL", icono: <SiMysql size={55} color="#4479A1" /> },
    { nombre: "Bootstrap", icono: <SiBootstrap size={55} color="#7952B3" /> },
    { nombre: "Git", icono: <FaGitAlt size={55} color="#F05032" /> },
    { nombre: "GitHub", icono: <FaGithub size={55} color="#ffffff" /> }
  ];

  return (
    <section
      id="tecnologias"
      className="container py-5"
      data-aos="zoom-in"
    >

      <h2 className="text-center mb-5">
        Tecnologías
      </h2>

      <div className="row">

        {tecnologias.map((tec, index) => (

          <div
            className="col-lg-3 col-md-4 col-sm-6 mb-4"
            key={index}
          >

            <div className="card tech-card bg-dark text-white border-secondary h-100">

              <div className="card-body text-center">

                <div className="mb-3">
                  {tec.icono}
                </div>

                <h5>{tec.nombre}</h5>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Tecnologias;