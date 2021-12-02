import React, { useState } from "react";
import obtenerSaldoInicial from "./api/obtenerSaldoInicial";
import Header from "./components/header/Header";
import ListadoMovimientos from "./components/ListadoMovimientos";
import RegistroMovimientos from "./components/RegistroMovimientos";
import useMovimientos from "./hooks/useMovimientos";

function App() {
  const [saldoInicial] = useState(obtenerSaldoInicial());  
  const [saldoFinal, movimientos, actualizarMovimientos] = useMovimientos(saldoInicial, []);

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
    </React.Fragment>
  );
}

export default App;
