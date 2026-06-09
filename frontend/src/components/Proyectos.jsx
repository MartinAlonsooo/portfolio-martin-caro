import { useEffect, useState } from "react";
import api from "../services/api";

function Proyectos() {

  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {

    api.get("proyectos/")
      .then((response) => {
        setProyectos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <section
      id="proyectos"
      className="container py-5"
      data-aos="fade-up"
    >

      <h2 className="text-center mb-5">
        Proyectos
      </h2>

      <div className="row">

        {proyectos.map((proyecto) => (

          <div
            className="col-md-4 mb-4"
            key={proyecto.id}
          >

            <div className="card bg-dark text-white border-secondary h-100">

              <div className="card-body">

                <h4>{proyecto.nombre}</h4>

                <p>{proyecto.descripcion}</p>

                <span className="badge bg-primary">
                  {proyecto.tecnologias}
                </span>

                <br />

                <a
                  href={proyecto.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light mt-3"
                >
                  Ver GitHub
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Proyectos