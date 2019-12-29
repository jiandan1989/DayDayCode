function bouncingBallOne(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let times = 1;
  let height = h * bounce;
  while (height > window) {
    times += 2;
    height = height * bounce;
  }
  return times;
}

function bouncingBallTwo(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let times = 1;
  let height = h * bounce;
  return (function getTimes() {
    times += 2;
    height *= bounce;
    return height >= window ? getTimes() : times; // 此处的递归可能有问题 caller
  })();
}
