import React from "react";
import { useNavigate } from "react-router-dom";

const Persona = ({ nombre, numero, id, fecha, manejarEliminarPersona }) => {
  let navigate = useNavigate();
  return (
    <tr>
      <th scope="row">1</th>
      <td>{nombre}</td>
      <td>{numero}</td>
      <td>{new Date(fecha).toDateString()}</td>
      <td>
        <button
          variant="primary"
          className="btn btn-primary"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Editar
        </button>
      </td>
      <td>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => manejarEliminarPersona(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Persona;
