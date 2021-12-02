import React from "react";
import { INGRESO } from "../api/formularioMovimiento";
import { formatearSaldo } from "../api/utils";

const ListadoMovimientos = ({ movimientos }) => {
  const estiloBadge = "badge-valor badge rounded-pill px-4";

  return (
    <aside className="col-5 py-3 border border-3 rounded">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Listado de Movimientos</span>
        <span className="badge bg-primary rounded-pill">
          {movimientos.length}
        </span>
      </h4>

      {/* <!-- formulario para filtrar los movimientos --> */}
      <form className="px-4 mb-4">
        <div className="input-group mb-3 form-inline">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="busca por el nombre"
            value=""
          />
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Todos
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Ingresos
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          />
          <label className="form-check-label" htmlFor="inlineRadio3">
            Gastos
          </label>
        </div>
      </form>

      {/* <!-- items: cada movimiento --> */}
      <ul className="list-group mb-3">
        {movimientos.map((mov) => {
          return (
            <li
              key={mov.id}
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
                  {mov.nombre}
                </h5>
              </div>
              <span
                className={
                  mov.tipo === INGRESO
                    ? `${estiloBadge} bg-success`
                    : `${estiloBadge} bg-danger`
                }
              >
                {formatearSaldo(mov.valor)}
              </span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ListadoMovimientos;
