import { v4 as uuidv4 } from "uuid";
import { abrirModal } from "./utils";

export const INGRESO = "ingreso";
export const GASTO = "gasto";
export const TODOS = "todos";

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
  if (!result) {
    const id = "valor-invalido";
    abrirModal(id, "Error", "El valor debe ser mayor a cero");
  }
  return result;
};

export const obtenerRegistroVacio = () => {
  return {
    nombre: "",
    tipo: "",
    valor: 0,
  };
};
