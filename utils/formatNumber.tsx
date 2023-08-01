export const formatNumber = (num: string) => {
  const numAbs = parseFloat(num);

  if (numAbs >= 1e15) {
    return (parseFloat(num) / 1e15).toFixed(1) + "Q"; // Quadrillions
  } else if (numAbs >= 1e12) {
    return (parseFloat(num) / 1e12).toFixed(1) + "T"; // Trillions
  } else if (numAbs >= 1e9) {
    return (parseFloat(num) / 1e9).toFixed(1) + "B"; // Billions
  } else if (numAbs >= 1e6) {
    return (parseFloat(num) / 1e6).toFixed(1) + "M"; // Millions
  } else if (numAbs >= 1e3) {
    return (parseFloat(num) / 1e3).toFixed(1) + "k"; // Thousands
  } else {
    return num.toString();
  }
};
