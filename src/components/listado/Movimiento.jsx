import React from "react";
import { INGRESO } from "../../api/formularioMovimiento";
import { formatearSaldo } from "../../api/utils";

const Movimiento = ({ movimiento }) => {
  const estiloBadge = "badge-valor badge rounded-pill px-4";

  return (
    <li
      key={movimiento.id}
      className="list-group-item d-flex justify-content-between lh-sm"
    >
      <div>
        <h5 className="my-1">
          <button className="btn-noborder btn-eliminar">
            <i className="bi bi-trash-fill"></i>
          </button>
          <button className="btn-noborder btn-editar">
            <i className="bi bi-pencil-fill"></i>
          </button>
          {movimiento.nombre}
        </h5>
      </div>
      <span
        className={
          movimiento.tipo === INGRESO
            ? `${estiloBadge} bg-success`
            : `${estiloBadge} bg-danger`
        }
      >
        {formatearSaldo(movimiento.valor)}
      </span>
    </li>
  );
};

export default Movimiento;
