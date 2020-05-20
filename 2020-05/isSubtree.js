/** 解法一: 不得不说, 这是最简单最省力的一种方法, 可惜了刚开始没想到啊 JSON.stringify 投机取巧 */
var isSubtree = function(s, t) {
    return JSON.stringify(s).indexOf(JSON.stringify(t)) > -1;
};

// 或者
var isSubtree = function(s, t) {
    return JSON.stringify(s).includes(JSON.stringify(t));
};

/** 解法二: 转换为字符串结合 正则 match */
var hammingWeight = function(n) {
    return (n.toString(2).match(/1/g) || []).length;
};

/** 解法三: 转换为二进制 结合数组 reduce */
var hammingWeight = function(n) {
    return n.toString(2).split('').reduce((prev, next) => {
        if (next === '1') {
            prev += 1;
        }
        return prev;
    }, 0);
};
/** 解法四: 位运算 todo */