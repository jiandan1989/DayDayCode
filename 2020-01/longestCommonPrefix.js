const mockData = [['aa', 'ab'], ['aa', 'aa'], ['flower', 'flow', 'flight'], ['a', 'a', 'b']];

const a = 'abc';
const s = new RegExp(a + '([a-z])*\\B');
console.log('abc,abc'.match(s), s);

function longestCommonPrefixFive(arr) {
  if (!arr.length) return '';
  if (arr.length === 1) return arr[0];

  let result = '';
  let str = arr[0];
  const strLen = str.length;
  const allStr = arr.join(',');
  let end = 1;
  let start = 0;
  while (start < strLen && end <= strLen) {
    const s = str.slice(start, end);
    const match = allStr.match(new RegExp(s, 'g'));
    const matchLen = match ? match.filter(item => item).length : 0;
    if (matchLen >= arr.length) {
      end += 1;
      result = s;
    } else {
      start += strLen;
    }
  }

  return result;
}
const result = mockData.map((item) => longestCommonPrefixFive(item));
console.log(result, '>>>>>>>>>>>>>');
function longestCommonPrefixOne(strs) {
  let s = strs[0];
  let arr = strs.slice(1);
  if (strs.length === 0) {
    return '';
  }
  let result = '';

  while (s.length > 0) {
    if (arr.every((item) => item.indexOf(s[0]) !== -1 && item.indexOf(s[0]) === 0)) {
      result += s[0];
      arr = arr.map((a) => a.replace(new RegExp(s[0], 'ig'), ''));
      s = s.slice(1);
    } else {
      s = '';
    }
  }

  return result;
}

// 72.78% 19.91%
function longestCommonPrefixTwo(strs) {
  if (strs.length === 0) {
    return '';
  }
  let str = strs[0];
  let arr = strs.slice(1);
  let result = [];

  while (str.length > 0) {
    if (arr.every((item) => item.indexOf(str[0]) === 0)) {
      result.push(str[0]);
      arr = arr.map((a) => a.replace(str[0], ''));
      str = str.slice(1);
    } else {
      str = '';
    }
  }

  return result.join('');
}

function longestCommonPrefixThree(strs) {
  if (strs.length === 0) {
    return '';
  }
  let str = strs[0];
  let arr = strs.slice(1);
  const result = [];
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    while (str.length > 0 && arr[i].indexOf(str[0] === num)) {
      result.push(str[0]);
      str = str.slice(1);
      num++;
      console.log(str, num);
    }
  }

  return result.join('');
}

function longestCommonPrefixFour(strs) {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) return strs[0];
  const first = strs[0].split('');

  const arr = first.reduce((prev, next) => {
    return prev.length === 0 ? prev.concat(next) : prev.concat(`${prev[prev.length - 1]}${next}`);
  }, []);

  const index = arr.findIndex((re) => strs.some((item) => item.indexOf(re) === -1 || re === item));
  return arr[index - 1] || arr[index] || '';
}

// console.log(longestCommonPrefixOne(mockData));
// console.log(longestCommonPrefixTwo(mockData));
// console.log(longestCommonPrefixThree(mockData), '>>>>>>>>>');

// function test(myList) {
//   let arr = [];
//   const result = [];
//   myList.map((item) => arr.push(item.split('')));
//   let current = Math.min(...myList.map((item) => item.length));

//   for (let i = 0, j = 0, time = 0; time < myList.length, i < current; i++) {
//     let el = arr[0][j];
//     if (el !== arr[1][j]) return;
//     if (time === 3) time = 2;
//     if (el === arr[time][j]) {
//       result.push(el);
//       j ++;
//       time ++;
//     }
//   }
//   return result.join('');
// }

// console.log(test(mockData));

/**
 * @param {string[]} strs
 * @return {string}
 */

// todo1: 将第一个字符串进行分割拼接成所有相邻字符的正则表达式所有可能的集合

// todo2: 稳定使用下标为0的字符串, 使用 while 循环 str.length > 0 时

// todo3: 先查找源数组中的最小最短字符串(但比较麻烦, 至少也要有一次循环), 然后在使用第一个方法形成正则的集合,
// todo3: 再遍历嵌套找到一个每一个字符串都能匹配到的字符

// todo4:

// todo: 最终思想: 尽可能的使用 for while 循环, 避免过多的内置方法的调用,
// todo: 其实数组也好字符串也好, 内置方法大多都是使用最基础的循环实现的, 有机会更多的查看下内置方法的实现逻辑, 或者是位运算(不会)
// todo: 其实最终思想就是先循环 arr, 然后指定某一个字符串, 对每一个字符或者相邻字符组成的数组进行判断,
// todo: 是否每一个字符串中都存在, 如果存在直接 return
// todo: 可能会使用的方法 split, reduce, every, find

// for (let i = 0; i < str.length - 1; i++) {
//   first.push(new RegExp(str[i], 'ig'));
//   first.push(new RegExp(str[i] + str[i + 1], 'ig'));
// }
// // while(str.length - 1 > 0) {
// //   first = first.concat(str[0], str[0] + str[1]);
// //   str = str.slice(1, str.length);
// // }
// return first;
// let myList = ['flower', 'flw', 'flight', 'flab'];
// let arr = [];
// myList.map((item) => arr.push(item.split('')));
// let current = Math.min(...myList.map((item) => item.length));
// let time = 0;
// // for (let i = 0, j = 0, time = 0; time < myList.length; i++) {
// //   let el = arr[0][j];
// //   if (el !== arr[1][j]) return
// //   if (time === myList.length) time = myList.length-1
// //   if (el === arr[i][j]) {
// //     console.log(el,time,i,j)
// //         j++
// //         time++
// //     }
// // }
// for (var el, i = 0; i < myList.length; i++) {
//   el = arr[i][time];
//   for (j = 0; j < current; j++) {
//     console.log(arr[i][j], el, time, '<><><><>');
//     if (arr[i][j] === el) {
//       time = time + 1;
//     } else {
//       return;
//     }
//   }
// }
