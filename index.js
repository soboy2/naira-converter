var nairaDollar = 0.0062;

function roundTwoDecimals(amount) {
  return Math.round(amount * 100) / 100;
}

exports.nairaToUSDollar = function(naira) {
  return roundTwoDecimals(naira * nairaDollar);
}

exports.USToNaira = function(us) {
  return roundTwoDecimals(us / nairaDollar);
}
