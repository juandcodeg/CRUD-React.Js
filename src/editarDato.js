import React, { useState, useEffect } from "react";

import Formulario from "./form.js";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditarDato = ({ datos, setDatos }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [datoParaEditar, setDatoParaEditar] = useState(null);

  useEffect(() => {
    const dato = datos.find((dato) => dato.id === id);
    setDatoParaEditar(dato);
  }, [datos, id]);

  const handleOnSubmit = (datosEditados) => {
    const datosActualizados = datos.map((dato) =>
      dato.id === id ? { ...dato, ...datosEditados } : dato
    );
    setDatos(datosActualizados);
    navigate("/");
  };

  return (
    <div>
      <Formulario datos={datoParaEditar} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditarDato;
