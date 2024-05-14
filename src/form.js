import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Formulario(props) {
  const [datos, setDatos] = useState({
    nombre: "",
    numero: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { nombre, numero } = datos;

  useEffect(() => {
    if (props.datos) {
      setDatos({
        nombre: props.datos.nombre,
        numero: props.datos.numero,
      });
    }
  }, [props.datos]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim() === "" || numero.trim() === "") {
      setErrorMsg("Por favor, rellene todos los campos.");
      return;
    }

    if (isNaN(numero)) {
      setErrorMsg("El número debe ser un valor numérico.");
      return;
    }

    const item = {
      id: props.datos ? props.datos.id : uuidv4(), // Nuevo ID si se está añadiendo
      nombre: nombre.trim(),
      numero: numero.trim(),
      fecha: new Date(),
    };

    props.handleOnSubmit(item);
    setDatos({ nombre: "", numero: "" }); // Reiniciar los campos después de enviar
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setDatos((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="name-field" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name-field"
          name="nombre"
          value={nombre}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone-field" className="form-label">
          Número
        </label>
        <input
          type="text"
          className="form-control"
          id="phone-field"
          name="numero"
          value={numero}
          onChange={handleInputChange}
        />
      </div>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      <button type="submit" className="btn btn-primary">
        {props.datos ? "Editar" : "Añadir"}{" "}
        {/* Cambiar el texto del botón según si se está añadiendo o editando */}
      </button>
    </form>
  );
}

export default Formulario;
