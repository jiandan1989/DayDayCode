/**
 * @param {string} s
 * @return {number}
 */
const romeMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToIntOne(s: string) {
  let num = 0;

  while (s.length > 0) {
    if (
      ((s[1] === 'M' || s[1] === 'D') && s[0] === 'C') ||
      ((s[1] === 'C' || s[1] === 'L') && s[0] === 'X') ||
      ((s[1] === 'V' || s[1] === 'X') && s[0] === 'I')
    ) {
      num -= romeMap[s[0]];
    } else {
      num += romeMap[s[0]];
    }
    s = s.slice(1);
  }

  return num;
}

function romanToIntTwo(str: string) {
  let num = 0;
  if (str.length === 1) return romeMap[str];

  for (let i = 0; i < str.length; i++) {
    if (
      ((str[i + 1] === 'M' || str[i + 1] === 'D') && str[i] === 'C') ||
      ((str[i + 1] === 'C' || str[i + 1] === 'L') && str[i] === 'X') ||
      ((str[i + 1] === 'V' || str[i + 1] === 'X') && str[i] === 'I')
    ) {
      num -= romeMap[str[i]];
    } else {
      num += romeMap[str[i]];
    }
  }
  return num;
}
