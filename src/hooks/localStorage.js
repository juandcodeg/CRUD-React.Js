import { useState, useEffect } from "react";

const useAlmacenamientoLocal = (clave, valorInicial) => {
  const [valor, setValor] = useState(() => {
    try {
      const valorLocal = window.localStorage.getItem(clave);
      return valorLocal ? JSON.parse(valorLocal) : valorInicial;
    } catch (error) {
      return valorInicial;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(clave, JSON.stringify(valor));
  }, [clave, valor]);
  return [valor, setValor];
};

export default useAlmacenamientoLocal;
