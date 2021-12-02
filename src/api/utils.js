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
