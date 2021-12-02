import React from "react";
import {
  crearRegistroMovimiento,
  GASTO,
  INGRESO,
  obtenerRegistroVacio,
  validarFormulario,
} from "../../api/formularioMovimiento";
import { useRegistroMovimiento } from "../../hooks/useRegistroMovimiento";

const RegistroMovimientos = ({ actualizarMovimientos }) => {
  const registroVacio = obtenerRegistroVacio();
  const [values, handleChange, reset] = useRegistroMovimiento(registroVacio);
  const { nombre, tipo, valor } = values;

  const registrarMovimiento = (e) => {
    e.preventDefault();
    if (validarFormulario(values)) {
      crearRegistroMovimiento(values, actualizarMovimientos);
      limpiarFormulario();
    }
  };

  const limpiarFormulario = () => {
    reset();
  };

  return (
    <aside className="col-5 pt-3 pb-5 border border-3 rounded">
      <h4 className="mb-3">Registro de Movimientos</h4>
      <form className="row px-3" onSubmit={registrarMovimiento}>
        <div className="col-4">
          {/* <!-- Tipo de movimiento --> */}
          <div className="row mb-4">
            <label htmlFor="tipo-movimiento" className="form-label">
              Tipo de Movimiento
            </label>
          </div>
          {/* <!-- Nombre del movimiento --> */}
          <div className="row mb-4">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
          </div>
          {/* <!-- Valor del movimiento --> */}
          <div className="row mb-4">
            <label htmlFor="valor" className="form-label">
              Valor
            </label>
          </div>
        </div>
        <div className="col-8">
          {/* <!-- Tipo de movimiento --> */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-plus-circle"></i>
            </span>
            <select
              className="form-select"
              id="tipo-movimiento"
              name="tipo"
              required
              value={tipo}
              onChange={handleChange}
            >
              <option value="">Seleccione un tipo</option>
              <option value={INGRESO}>Ingreso</option>
              <option value={GASTO}>Gasto</option>
            </select>
          </div>
          {/* <!-- Nombre del movimiento --> */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-file-earmark-text-fill"></i>
            </span>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              placeholder="Nombre del movimiento"
              required
            />
          </div>
          {/* <!-- Valor del movimiento --> */}
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-currency-dollar"></i>
            </span>
            <input
              type="number"
              className="form-control"
              id="valor"
              name="valor"
              value={valor}
              onChange={handleChange}
              placeholder="Valor"
              required
            />
          </div>
        </div>
        <hr className="my-4" />
        <div className="container">
          <div className="row justify-content-evenly">
            <div className="col-5">
              <button className="w-100 btn btn-danger btn-lg" type="button">
                Cancelar
              </button>
            </div>
            <div className="col-6">
              <button className="w-100 btn btn-primary btn-lg" type="submit">
                Agregar Movimiento
              </button>
            </div>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default RegistroMovimientos;
