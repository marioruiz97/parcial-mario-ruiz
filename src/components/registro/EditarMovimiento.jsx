import React, { useEffect, useState } from "react";
import {
  GASTO,
  INGRESO,
  validarFormulario,
} from "../../api/formularioMovimiento";

import $ from "jquery";
import { useEditarMovimiento } from "../../hooks/useEditarMovimiento";

export const EDITAR_MOVIMIENTO = "editar-movimiento";

const EditarMovimiento = ({ movimiento }) => {
  const [prevState, setPrevState] = useState(movimiento);
  const [values, handleChange, setMovimiento] = useEditarMovimiento(movimiento);
  const { nombre, tipo, valor } = values;

  useEffect(() => {
    if (prevState !== movimiento) {
      setPrevState(movimiento);
      setMovimiento(movimiento);
    }
  }, [movimiento, prevState, setPrevState, values, setMovimiento]);

  const editar = (e) => {
    e.preventDefault();
    if (validarFormulario(values)) {
      const eventoEditar = new CustomEvent(EDITAR_MOVIMIENTO, {
        detail: { ...values, valor: Number(values.valor) },
      });
      window.dispatchEvent(eventoEditar);
    }
    cerrarModal();
  };

  const cerrarModal = () => {
    setMovimiento(prevState);
    const modal = $("#modal-" + movimiento.id);
    window.$(modal).modal("hide");
  };

  return (
    <div
      className="modal fade"
      id={`modal-${movimiento.id}`}
      tabIndex="-1"
      aria-labelledby="modalEditar"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalEditar">
              Editar Movimiento
            </h5>
          </div>
          <form className="px-3" onSubmit={editar}>
            {/* <!-- Tipo de movimiento --> */}
            <div className="row mt-4">
              <label htmlFor="tipo-movimiento" className="form-label">
                Tipo de Movimiento:
              </label>
              <div className="input-group">
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
            </div>
            {/* <!-- Nombre del movimiento --> */}
            <div className="row mt-4">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <div className="input-group">
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
            </div>
            {/* <!-- Valor del movimiento --> */}
            <div className="row mt-4">
              <label htmlFor="valor" className="form-label">
                Valor:
              </label>
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
            <div className="container modal-footer">
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={cerrarModal}
              >
                Cancelar
              </button>
              <button
                className="btn btn-primary"
                type="submit"
                disabled={values === prevState}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarMovimiento;
