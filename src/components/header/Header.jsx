import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { formatearSaldo } from "../../api/utils";

const Header = ({ saldoInicial, saldoFinal }) => {
  return (
    <div id="header" className="row my-5">
      <div className="col-6">
        <img src={logo} alt="Logo" width="75px" height="75px" />
        <h2>Parcial Programación Distribuida y Paralela</h2>
      </div>
      <div className="col-1"></div>
      <div className="col-5">
        <div className="row ">
          <div className="col-6">
            <label htmlFor="saldo-inicial">Saldo inicial:</label>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                id="saldo-inicial"
                type="text"
                value={formatearSaldo(saldoInicial)}
                readOnly
              />
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="saldo-final">Saldo final:</label>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input id="saldo-final" type="text" value={formatearSaldo(saldoFinal)} readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
