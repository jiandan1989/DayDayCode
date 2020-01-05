/**
 * @param x
 * 使用此方法虽然可以实现, 但是并没有真正理解到精髓所在, 而是使用了 原生的数组及字符串内的方法
 */
const reverseNumberOne = function(x: number) {
  if (x <= Math.pow(-2, 31) || x >= Math.pow(2, 31) - 1) {
    return 0;
  }
  let isFu = x > 0;
  let num: any = ('' + Math.abs(x))
    .split('')
    .reverse()
    .join('')
    .replace(/^0{1,}/, '');

  num = isFu ? num : -num;
  if (num <= Math.pow(-2, 31) || num >= Math.pow(2, 31) - 1) {
    return 0;
  }
};
