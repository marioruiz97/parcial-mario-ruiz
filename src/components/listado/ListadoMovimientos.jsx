import React, { useCallback, useState } from "react";
import Filtros from "./Filtros";
import Movimiento from "./Movimiento";

const ListadoMovimientos = ({ movimientos, eliminarMovimiento }) => {
  const [mostrados, setMostrados] = useState(movimientos);

  const filtrar = useCallback((listaFiltrada) => {
    setMostrados(listaFiltrada);
  }, []);

  return (
    <aside className="col-5 py-3 border border-3 rounded">
      <h4 className="d-flex justify-content-between align-items-center mb-5">
        <span className="text-primary">Listado de Movimientos</span>
        <span className="badge bg-primary rounded-pill">
          {movimientos.length}
        </span>
      </h4>

      {/* <!-- formulario para filtrar los movimientos --> */}
      <Filtros movimientos={movimientos} filtrar={filtrar} />

      {/* <!-- listado de movimientos --> */}
      <ul className="list-group mb-3">
        {mostrados.map((mov) => {
          return (
            <li
              key={mov.id}
              className="list-group-item d-flex justify-content-between lh-sm"
            >
              <Movimiento movimiento={mov} eliminar={eliminarMovimiento} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ListadoMovimientos;
