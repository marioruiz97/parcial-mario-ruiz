import { useState } from "react";
import { GASTO, INGRESO } from "../api/formularioMovimiento";
import { abrirModal } from "../api/utils";

const useMovimientos = (saldoInicial, initialState) => {
  const [saldoFinal, setSaldoFinal] = useState(saldoInicial);
  const [movimientos, setMovimientos] = useState(initialState);

  const actualizarMovimientos = (nuevoMovimiento) => {
    if (
      nuevoMovimiento.tipo === GASTO &&
      saldoFinal - nuevoMovimiento.valor < 0
    ) {
      const id = "saldo-insuficiente";
      abrirModal(
        id,
        "Error",
        "No se tiene saldo suficiente para la transacción",
        false
      );
    } else {
      setMovimientos([...movimientos, nuevoMovimiento]);
      const nuevoSaldo = calcularSaldo(nuevoMovimiento, GASTO);
      setSaldoFinal(nuevoSaldo);

      abrirModal(
        "registro-exitoso",
        "Registro exitoso",
        `Se agregó el ${nuevoMovimiento.tipo} ${nuevoMovimiento.nombre} con exito. Su id es: ${nuevoMovimiento.id} `,
        false
      );
    }
  };

  const eliminarMovimiento = (movimiento) => {
    if (movimientos.filter((mov) => mov.id === movimiento.id).length > 0) {
      if (movimiento.tipo === INGRESO && saldoFinal - movimiento.valor < 0) {
        abrirModal(
          "error-eliminar",
          "Error",
          "No se puede eliminar el registro porque quedaría en saldo negativo"
        );
      } else {
        const nuevoSaldo = calcularSaldo(movimiento, INGRESO);
        setMovimientos(movimientos.filter((mov) => mov.id !== movimiento.id));
        setSaldoFinal(nuevoSaldo);
      }
    }
  };

  const calcularSaldo = (movimiento, tipo) => {
    const nuevoSaldo =
      movimiento.tipo === tipo
        ? saldoFinal - movimiento.valor
        : saldoFinal + movimiento.valor;
    return nuevoSaldo;
  };

  return [saldoFinal, movimientos, actualizarMovimientos, eliminarMovimiento];
};

export default useMovimientos;
