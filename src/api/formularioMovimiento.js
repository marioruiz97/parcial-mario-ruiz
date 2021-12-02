import { v4 as uuidv4 } from "uuid";

export const INGRESO = "ingreso";
export const GASTO = "gasto";

export const crearRegistroMovimiento = (values, accion) => {
  const registro = {
    ...values,
    valor: Number(values.valor),
    id: uuidv4(),
  };
  accion(registro);
};

export const validarFormulario = (values) => {
  const result = Number(values.valor) >= 1;
  if (!result) alert("el valor debe ser mayor a cero");
  return result;
};

export const obtenerRegistroVacio = () => {
  return {
    nombre: "",
    tipo: "",
    valor: 0,
  };
};
