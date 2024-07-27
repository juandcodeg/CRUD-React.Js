import React from "react";
import Formulario from "./form.js";
const AgregaPersona = ({ datos, setDatos }) => {
  const handleOnSubmit = (nuevoDato) => {
    setDatos([...datos, nuevoDato]);
  };
  return <Formulario handleOnSubmit={handleOnSubmit} />;
};
export default AgregaPersona;
