function removeNbOne(n: any) {
  if (n <= 0) return [];
  const arr = Array(n)
    .fill(1)
    .map((item, idx) => idx + 1);
  const total = arr.reduce((prev, next) => prev + next);
  return arr
    .filter((i) => arr.find((j) => (j + 1) * i + j === total))
    .reduce((prev, next) => {
      return [
        [prev, next],
        [next, prev],
      ];
    });
}

function removeNbTwo(n) {
  if (n <= 0) return [];
  const arr = Array(n)
    .fill(1)
    .map((item, idx) => idx + 1);
  const total = arr.reduce((prev, next) => prev + next);
  return arr
    .filter((i, index, current) => {
      return current.find((j) => {
        return j * i === total - j - i;
      });
    })
    .reduce((x, y) => [
      [x, y],
      [y, x],
    ]);
}
