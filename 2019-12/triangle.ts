/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {boolean}
 */

function triangleOne(a: number, b: number, c: number) {
  return a > 0 && b > 0 && c > 0 && a + b > c && a - b < c && b + c > a && b - c < a && a + c > b && a - c < b;
}

function triangleTwo(a: number, b: number, c: number) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  switch (true) {
    case a + b > c && a - b < c:
    case a + c > b && a - c < b:
    case b + c > a && b - c < a:
      return true;
    default:
      return false;
  }
}

/**
 * 最后这种解法来自社区内的最佳答案, 此处利用了数组交换位置来实现重新赋值操作, 有待提升
 */
function isTriangle(a: number, b: number, c: number) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);
  return a + b > c;
}
