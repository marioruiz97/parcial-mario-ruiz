import { useState } from "react";
import { obtenerRegistroVacio } from "../api/formularioMovimiento";

export const useRegistroMovimiento = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  const reset = () => {
    setValues(obtenerRegistroVacio());
  };

  return [values, handleChange, reset];
};
