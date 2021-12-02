import React from "react";
import Filtros from "./Filtros";
import Movimiento from "./Movimiento";

const ListadoMovimientos = ({ movimientos }) => {
  return (
    <aside className="col-5 py-3 border border-3 rounded">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Listado de Movimientos</span>
        <span className="badge bg-primary rounded-pill">
          {movimientos.length}
        </span>
      </h4>

      {/* <!-- formulario para filtrar los movimientos --> */}
      <Filtros />

      {/* <!-- items: cada movimiento --> */}
      <ul className="list-group mb-3">
        {movimientos.map((mov) => {
          return <Movimiento movimiento={mov} />;
        })}
      </ul>
    </aside>
  );
};

export default ListadoMovimientos;
