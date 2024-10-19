import React from "react";

export const Contacto = () => {
  return (
    <section id="contacto" className="container-fluid my-3">
      <div className="container-fluid row text-center">
        <h2 className="text-primary fw-bold text-center mt-3 text-decoration-underline">
          Contacto
        </h2>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded-4"
              name="nombre"
              id="nombre"
              placeholder=""
              required
            />
            <label htmlFor="nombre">Nombre y apellido *</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded-4"
              name="correo"
              id="correo"
              placeholder=""
              required
            />
            <label htmlFor="correo">Correo Electrónico *</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control rounded-4"
              name="telefono"
              id="telefono"
              placeholder=""
              required
            />
            <label htmlFor="telefono">Número de teléfono *</label>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <textarea
            rows={8}
            className="form-control rounded-3 mb-3"
            name="mensaje"
            id="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>
        </div>
        <div className="row container">
          <div className="col text-end">
            <button
              type="button"
              className="btn btn-primary me-0 text-light rounded-4"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
