function isSquareOne(n: number): boolean {
  return n === 0 || (n > 0 && Math.sqrt(n) === Math.ceil(Math.sqrt(n)));
}

// zyy
function isSquareTwo(n: number): boolean {
  return n > 0 && Math.sqrt(n) % 1 === 0;
}
