import React from "react";
import { INGRESO } from "../../api/formularioMovimiento";
import { formatearSaldo } from "../../api/utils";

const Movimiento = ({ movimiento, eliminar }) => {
  const estiloBadge = "badge-valor badge rounded-pill px-4";
  const pl10 = { paddingLeft: "14px" };

  return (
    <React.Fragment>
      <div>
        <h5 className="my-1">
          <button
            className="btn-noborder btn-eliminar"
            onClick={() => eliminar(movimiento)}
          >
            <i className="bi bi-trash-fill"></i>
          </button>
          <button className="btn-noborder btn-editar">
            <i className="bi bi-pencil-fill"></i>
          </button>
          <span style={pl10}> {movimiento.nombre}</span>
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
    </React.Fragment>
  );
};

export default Movimiento;
