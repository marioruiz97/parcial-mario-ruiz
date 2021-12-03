import React, { useEffect, useState } from "react";
import { GASTO, INGRESO, TODOS } from "../../api/formularioMovimiento";

const Filtros = ({ movimientos, filtrar }) => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState(TODOS);

  useEffect(() => {
    if (tipo === TODOS)
      filtrar(
        movimientos.filter((mov) =>
          mov.nombre.toLowerCase().includes(nombre.toLowerCase())
        )
      );
    if (tipo !== TODOS)
      filtrar(
        movimientos.filter(
          (mov) =>
            mov.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
            mov.tipo === tipo
        )
      );
  }, [nombre, tipo, movimientos, filtrar]);

  const cambiarNombre = (e) => {
    setNombre(e.target.value);
  };

  return (
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
          value={nombre}
          onChange={cambiarNombre}
        />
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value={TODOS}
          onChange={() => setTipo(TODOS)}
          checked={tipo === TODOS}
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
          value={INGRESO}
          onChange={() => setTipo(INGRESO)}
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
          value={GASTO}
          onChange={() => setTipo(GASTO)}
        />
        <label className="form-check-label" htmlFor="inlineRadio3">
          Gastos
        </label>
      </div>
    </form>
  );
};

export default Filtros;
