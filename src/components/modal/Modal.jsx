import React, { useState } from "react";
import $ from "jquery";
import "./Modal.css";

const Modal = ({ id, titulo, texto, confirmacion }) => {
  const [idModal, setIdModal] = useState(id);

  if (id !== idModal) {
    setIdModal(id);
  }
  setTimeout(() => {
    const modal = $("#" + idModal);
    window.$(modal).modal("show");
  }, 200);

  return (
    // <!-- Modal -->
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {titulo}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="close"
            ></button>
          </div>
          <div className="modal-body">{texto}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-danger"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
            {confirmacion ? (
              <button type="button" className="btn btn-primary">
                Guardar
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
