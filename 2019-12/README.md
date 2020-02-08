## 2019-12 {docsify-ignore}

✅ 给定两个字符串变量 a, b, 返回得到一个新的排序过的字符串, 且新字符串中不允许有重复字符出现, 这里可以理解为两个变量合集的写法

```js
const a = 'xyaabbbccccdefww';
const b = 'xxxxyyyyabklmopq';
// longest(a, b) -> "abcdefklmopqwxy"
```

[](longest.ts ' :include :type=code')

✅ 给定 a, b, c 三个变量, 通过方法判断接收三个变量的值能够构建成一个正确的三角形

> 最初理解错了三角形的定义, 其实就是任意两个边之和大于第三边, 同时任意两边之差小于第三边

[简单实现](triangle.ts ':include :type=code')

✅ [原题](https://www.codewars.com/kata/find-the-divisors/train/javascript)创建一个函数, 接收一个整数,大于 1 且返回一个包含除去被 1 和 自身整除的一个数组集合

> 除去本身和 1 之外无法被其他数字整除的数字集合
> // 比如 n = 5 除去 1 和本身的话, 1,2,3,5 返回四个数字, 而 4 能够被 2 整除

[简单实现](divisors.ts ':include :type=code')

### 等距图

✅ 等距图是一个没有重复字母，连续或不连续的单词。实现一个函数，该函数确定仅包含字母的字符串是否为等距图。假设空字符串是一个等轴测图。忽略字母大小写。

```js
isIsogram('Dermatoglyphics') == true;
isIsogram('aba') == false;
isIsogram('moOse') == false;
```

[简单实现](isIsogram.ts ':include :type=code')

✅ 实现一个将两个数字加在一起并以二进制形式返回其总和的函数。转换可以在添加之前或之后进行。返回二进制字符串, 二进制, 八进制, 十进制 及 十六进制转换 toString, parseInt

[简单实现](addBinary.ts ':include :type=code')

✅ 判断是否是平方数, 比如 25 true, 3: false, 单纯的使用 Math.sqrt 判断会出现 NaN

```js
25: true
3: false
```

[简单实现](isSquare.ts ':include :type=code')

✅ATM 机允许使用 4 位或 6 位 PIN 码，而 PIN 码只能包含 4 位或 6 位数字。如果函数传递了有效的 PIN 字符串, 返回 true,否则返回 false

[简单实现](Kata.ts ':include :type=code')

<!-- 统计元音字符(a e i o u) 和 / 以及空格出现次数, 目前有误 -->

✅ 公交车上下人计算

```js
number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17)
```

[原题](https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript)

[简单实现](busNumber.ts ':include :type=code')

✅ 字符串排序

```js
'is2 Thi1s T4est 3a'; // --> 'Thi1s is2 3a T4est';
```

[原题](https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript)

[简单实现](stringSort.ts ':include :type=code')

✅ 获取到看到球的次数: 已知高度 h, 每次反弹后的系数 bounce, 和可以看到球的高度(window)假设自己是在窗户的上沿能看到球, 如果 h 小于 || bounce 小于 0 || bounce 大于等于 1(万有引力定律, 不可能每次重新弹起的高度和上次的一样的) || window 大于等 h 都返回 -1, 计算次数

[原题](https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/typescript)

[简单实现](bouncingBall.ts ':include :type=code')

✅DNA 互补, 互转 更多的练习, 其实最开始的时候没有想到使用对象的方法, 只是多写了几个三目运算符. 也可以使用 swtich, 而且一直觉得是可以使用正则匹配做到的, 但是最后还是放弃了

```js
dnaStrand('ATTGC'); // return "TAACG"
dnaStrand('GTAT'); // return "CATA"
```

[简单实现](dnaStrand.ts ':include :type=code')

✅[数字之和](https://www.codewars.com/kata/is-my-friend-cheating/train/typescript): 求一元二次方程

[简单实现](removeNb.ts ':include :type=code')
