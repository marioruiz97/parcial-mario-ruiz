import React, { useState } from "react";
import obtenerSaldoInicial from "./api/obtenerSaldoInicial";
import Header from "./components/header/Header";
import ListadoMovimientos from "./components/listado/ListadoMovimientos";
import Modal from "./components/modal/Modal";
import RegistroMovimientos from "./components/registro/RegistroMovimientos";
import useMovimientos from "./hooks/useMovimientos";

function App() {
  const [saldoInicial] = useState(obtenerSaldoInicial());
  const [saldoFinal, movimientos, actualizarMovimientos] = useMovimientos(
    saldoInicial,
    []
  );

  return (
    <React.Fragment>
      <header className="container-fluid">
        <Header saldoInicial={saldoInicial} saldoFinal={saldoFinal} />
      </header>
      <section className="container-fluid mx-3">
        <div className="row justify-content-evenly">
          <RegistroMovimientos actualizarMovimientos={actualizarMovimientos} />
          <ListadoMovimientos movimientos={movimientos} />
        </div>
      </section>
      <div class="d-grid gap-2">
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <Modal titulo="Error" texto="Prueba" confirmacion={true} />
      </div>
    </React.Fragment>
  );
}

export default App;
