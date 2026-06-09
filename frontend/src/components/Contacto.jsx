import { useState } from "react";
import api from "../services/api";

function Contacto() {

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.post("contacto/", formData);

      setEnviado(true);

      setFormData({
        nombre: "",
        correo: "",
        mensaje: ""
      });

    } catch (error) {

      console.error(error);

      alert("Error al enviar mensaje");

    }

  };

  return (
    <section
      id="contacto"
      className="container py-5"
      data-aos="fade-up"
    >

      <h2 className="text-center mb-5">
        Contacto
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mx-auto"
        style={{ maxWidth: "600px" }}
      >

        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Nombre"
          required
        />

        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          className="form-control mb-3"
          placeholder="Correo"
          required
        />

        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="5"
          className="form-control mb-3"
          placeholder="Mensaje"
          required
        />

        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Enviar Mensaje
        </button>

        {enviado && (

          <div className="alert alert-success mt-3">

            Mensaje enviado correctamente.

          </div>

        )}

      </form>

    </section>
  );
}

export default Contacto;