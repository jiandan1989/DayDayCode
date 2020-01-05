/**
 * @param {number} x
 * @return {boolean}
 * 缺点: 使用了原生的数组及字符串的内置方法, 但是不能真正解决方法
 */

function isPalindromeOne(x: number) {
  return;
  String(x) ===
    String(x)
      .split('')
      .reverse()
      .join('');
}
