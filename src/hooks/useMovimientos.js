import { useState } from "react";
import { GASTO } from "../api/formularioMovimiento";

const useMovimientos = (saldoInicial, initialState) => {
  const [saldoFinal, setSaldoFinal] = useState(saldoInicial);
  const [movimientos, setMovimientos] = useState(initialState);

  const actualizarMovimientos = (nuevoMovimiento) => {
    console.log(nuevoMovimiento);
    if (
      nuevoMovimiento.tipo === GASTO &&
      saldoFinal - nuevoMovimiento.valor < 0
    ) {
      alert("No se tiene saldo suficiente para la transacción");
    } else {
      setMovimientos([...movimientos, nuevoMovimiento]);
      const nuevoSaldo =
        nuevoMovimiento.tipo === GASTO
          ? saldoFinal - nuevoMovimiento.valor
          : saldoFinal + nuevoMovimiento.valor;
      setSaldoFinal(nuevoSaldo);
    }
  };
  return [saldoFinal, movimientos, actualizarMovimientos];
};

export default useMovimientos;
