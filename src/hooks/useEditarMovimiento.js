import { useState } from "react";

export const useEditarMovimiento = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  const setMovimiento = (movimiento) => {
    setValues(movimiento);
  };

  return [values, handleChange, setMovimiento];
};
