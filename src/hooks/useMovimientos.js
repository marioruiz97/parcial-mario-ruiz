import { useState } from "react";
import { GASTO, INGRESO } from "../api/formularioMovimiento";
import { abrirModal } from "../api/utils";

const useMovimientos = (saldoInicial, initialState) => {
  const [saldoFinal, setSaldoFinal] = useState(saldoInicial);
  const [movimientos, setMovimientos] = useState(initialState);

  const actualizarMovimientos = (movimiento, editar = false) => {
    const auxMovimientos = movimientos.filter(
      (mov) => mov.id !== movimiento.id
    );
    if (editar && !validarEdicion(movimiento)) {
      abrirModal(
        "edicion-invalida",
        "Error",
        "No se tiene saldo suficiente para la edición del movimiento"
      );
    } else if (!editar && movimiento.tipo === GASTO && movimiento.valor > saldoFinal) {
      abrirModal(
        "saldo-insuficiente",
        "Error",
        "No se tiene saldo suficiente para la transacción"
      );
    } else {
      setMovimientos([...auxMovimientos, movimiento]);
      const nuevoSaldo = calcularSaldo([...auxMovimientos, movimiento]);
      setSaldoFinal(nuevoSaldo);
      abrirModal(
        "registro-exitoso",
        "Registro exitoso",
        `Se guardó el ${movimiento.tipo} ${movimiento.nombre} con exito. Su id es: ${movimiento.id} `
      );
    }
  };

  const eliminarMovimiento = (movimiento) => {
    if (movimientos.filter((mov) => mov.id === movimiento.id).length > 0) {
      if (movimiento.tipo === INGRESO && movimiento.valor > saldoFinal) {
        abrirModal(
          "error-eliminar",
          "Error",
          "No se puede eliminar el registro porque quedaría en saldo negativo"
        );
      } else {
        setMovimientos(movimientos.filter((mov) => mov.id !== movimiento.id));
        const saldo = calcularSaldo(
          movimientos.filter((mov) => mov.id !== movimiento.id)
        );
        setSaldoFinal(saldo);
      }
    }
  };

  const validarEdicion = (movNuevo) => {
    const saldoActual = calcularSaldo(movimientos);
    const movViejo = movimientos.find((mov) => mov.id === movNuevo.id);
    // no cambia de tipo y es ingreso
    if (movNuevo.tipo === movViejo.tipo && movNuevo.tipo === INGRESO)
      return saldoActual - movViejo.valor + movNuevo.valor >= 0;
    // no cambia de tipo y es gasto
    if (movNuevo.tipo === movViejo.tipo && movNuevo.tipo === GASTO)
      return saldoActual + movViejo.valor - movNuevo.valor >= 0;
    // cambia de ingreso a gasto
    if (movNuevo.tipo !== movViejo.tipo && movNuevo.tipo === GASTO)
      return saldoActual - movViejo.valor - movNuevo.valor >= 0;
    // cambia de gasto a ingreso
    if (movNuevo.tipo !== movViejo.tipo && movNuevo.tipo === INGRESO)
      return saldoActual + movViejo.valor + movNuevo.valor >= 0;
  };

  const calcularSaldo = (movimientos) => {
    const ingresos = obtenerTotal(movimientos, INGRESO);
    const gastos = obtenerTotal(movimientos, GASTO);
    return saldoInicial + (ingresos - gastos);
  };

  const obtenerTotal = (movimientos, tipo) => {
    return movimientos
      .filter((mov) => mov.tipo === tipo)
      .map((mov) => mov.valor)
      .reduce((total, ingreso) => (total += ingreso), 0);
  };

  return [saldoFinal, movimientos, actualizarMovimientos, eliminarMovimiento];
};

export default useMovimientos;
