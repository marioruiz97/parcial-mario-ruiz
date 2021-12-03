import React, { useCallback, useEffect, useState } from "react";
import { obtenerSaldoInicial } from "./api/utils";
import Header from "./components/header/Header";
import ListadoMovimientos from "./components/listado/ListadoMovimientos";
import { EDITAR_MOVIMIENTO } from "./components/registro/EditarMovimiento";
import RegistroMovimientos from "./components/registro/RegistroMovimientos";
import useMovimientos from "./hooks/useMovimientos";

function App() {
  const [saldoInicial] = useState(obtenerSaldoInicial());
  const [saldoFinal, movimientos, actualizarMovimientos, eliminarMovimiento] =
    useMovimientos(saldoInicial, []);

  const editarMovimiento = useCallback(
    (e) => {
      actualizarMovimientos(e.detail, true);
    },
    [actualizarMovimientos]
  );

  useEffect(() => {
    window.addEventListener(EDITAR_MOVIMIENTO, editarMovimiento);
    return () => {
      window.removeEventListener(EDITAR_MOVIMIENTO, editarMovimiento);
    };
  }, [editarMovimiento]);

  return (
    <React.Fragment>
      <header className="container-fluid pb-1 pt-5">
        <Header saldoInicial={saldoInicial} saldoFinal={saldoFinal} />
      </header>
      <section className="container-fluid px-3 mt-5 pt-3">
        <div className="row justify-content-evenly">
          <RegistroMovimientos actualizarMovimientos={actualizarMovimientos} />
          <ListadoMovimientos
            movimientos={movimientos}
            eliminarMovimiento={eliminarMovimiento}
          />
        </div>
      </section>
      <div id="modal-container" className="d-grid gap-2"></div>
    </React.Fragment>
  );
}

export default App;
