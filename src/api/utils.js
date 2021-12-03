import Modal from "../components/modal/Modal";
import ReactDOM from "react-dom";

export const obtenerSaldoInicial = () => {
  const millones = Math.floor(Math.random() * 10) + 5;
  return millones * 1000000;
};

export const formatearSaldo = (saldo) => {
  const saldoStr = saldo.toString();

  if (saldoStr.length <= 3) return saldoStr;
  const centenas = saldoStr.substr(saldoStr.length - 3);
  const miles = saldoStr.substr(
    saldoStr.length >= 6 ? saldoStr.length - 6 : 0,
    saldoStr.length <= 6 ? saldoStr.length - 3 : 3
  );
  const millones = saldoStr.substr(0, saldoStr.length - 6);

  return `${millones ? millones + "," : ""}${miles},${centenas}`;
};

export const abrirModal = (id, titulo, texto, confirmacion) => {
  ReactDOM.render(
    <Modal id={id} titulo={titulo} texto={texto} confirmacion={confirmacion} />,
    document.getElementById("modal-container")
  );
};
