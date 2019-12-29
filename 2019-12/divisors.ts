function divisors(integer: number) {
  const arr = Array(integer)
    .fill(1)
    .map((item, index) => index + 1);

  const result = arr.filter((item) => {
    const divisor = integer / item;
    return divisor !== 1 && divisor !== integer && divisor === parseInt(`${divisor}`, 10);
  });

  return result.length > 0 ? result : `${integer} is prime`;
}
