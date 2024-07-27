import React from "react";
import Persona from "./components/persona.js";
import _ from "lodash";
import { NavLink } from "react-router-dom";

function Table({ datos, setDatos }) {
  const manejarEliminarPersona = (id) => {
    setDatos(datos.filter((dato) => dato.id !== id));
  };
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Numero</th>
          <th scope="col">Fecha</th>
          <th scope="col">Editar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {/* TR */}

        {!_.isEmpty(datos) ? (
          datos.map((dato) => (
            <Persona
              key={dato.id}
              {...dato}
              manejarEliminarPersona={manejarEliminarPersona}
            />
          ))
        ) : (
          <React.Fragment>
            <div>
              <p className="message">
                No hay datos disponibles. Por favor agregue algunos datos.
              </p>

              <NavLink to="/new" className="nav-link text-white">
                Añadir información
              </NavLink>
            </div>
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
}

export default Table;
