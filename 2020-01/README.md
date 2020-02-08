## 2020-01 {docsify-ignore}

### 两数之和

✅ [两数之和](https://leetcode-cn.com/problems/two-sum/): 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

```js
const nums = [2, 7, 11, 15],
  target = 9;

// nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
```

##### 解法

> 可以有很多种解法

[](twoSum.ts ':include :type=code')

### 数字反转

✅ [数字反转](https://leetcode-cn.com/problems/reverse-integer/): 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转

```js
输入: 123;
输出: 321;

输入: 120;
输出: 21;
```

[](reverseNumber.ts ':include :type=code')

### 回文数

✅ [回文数](https://leetcode-cn.com/problems/palindrome-number/): 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

```js
// 示例
121 -> true
-121 -> false
```

[](isPalindrome.ts ':include :type=code')

### 罗马数字

✅ [罗马数字](https://leetcode-cn.com/problems/roman-to-integer/): 罗马数字包含以下七种字符: `I: 1`, `V: 5`, `X: 10` `L: 50`, `C: 100`, `D: 500` 和 `M: 1000`

- 例如， 罗马数字 2 写做  II ，即为两个并列的 1。12 写做  XII ，即为  X + II 。 27 写做   XXVII, 即为  XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做  IIII，而是  IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为  IX。这个特殊的规则只适用于以下六种情况：

- I  可以放在  V (5) 和  X (10) 的左边，来表示 4 和 9。
- X  可以放在  L (50) 和  C (100) 的左边，来表示 40 和  90。
- C  可以放在  D (500) 和  M (1000) 的左边，来表示  400 和  900。
  给定一个罗马数字，将其转换成整数。输入确保在 1  到 3999 的范围内。

例如:

```js
III === 3;
IV === 4;
LVIII === 58;
```

[](romanToInt.ts ':include :type=code')
