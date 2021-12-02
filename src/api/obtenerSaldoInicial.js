const obtenerSaldoInicial = () => {
  const millones = Math.floor(Math.random() * 10) + 5;
  return millones * 1000000;
};

export default obtenerSaldoInicial;
