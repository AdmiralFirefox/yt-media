const formatWithSuffix = (num: number, suffix: string) => {
  if (num === Math.floor(num)) {
    return num.toString() + suffix;
  } else {
    return num.toFixed(1) + suffix;
  }
};

export const formatNumber = (num: string) => {
  const numAbs = parseFloat(num);

  if (numAbs >= 1e15) {
    const formattedNum = numAbs / 1e15;
    return formatWithSuffix(formattedNum, "Q");
  } else if (numAbs >= 1e12) {
    const formattedNum = numAbs / 1e12;
    return formatWithSuffix(formattedNum, "T");
  } else if (numAbs >= 1e9) {
    const formattedNum = numAbs / 1e9;
    return formatWithSuffix(formattedNum, "B");
  } else if (numAbs >= 1e6) {
    const formattedNum = numAbs / 1e6;
    return formatWithSuffix(formattedNum, "M");
  } else if (numAbs >= 1e3) {
    const formattedNum = numAbs / 1e3;
    return formatWithSuffix(formattedNum, "k");
  } else {
    return num.toString();
  }
};
