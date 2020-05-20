/** 解法一 */
var smallestK = function(arr, k) {
    if (arr.length <= 0 || k <= 0) {
        return [];
    }
    if (arr.length <= k) {
        return arr;
    }
    return arr.sort((a, b) => a - b).slice(0, k);
};
/** 解法二: 就是先截取, 后循环判断如果有小于任何一个值时就替换掉, 当然这样就比较消耗内存了 */
// todo

/** 解法三: 使用 while 循环, 每次循环找到最小的那个值然后获取出来, 但这种感觉上不用测试就知道消耗更多 */
var smallestK = function(arr, k) {
    if (arr.length <= 0 || k <= 0) {
        return [];
    }
    if (arr.length <= k) {
        return arr;
    }
    let num = k;
    let min = 0;
    let index = -1;
    let result = [];
    while (num > 0) {
        min = Math.min(...arr);
        index = arr.findIndex(item => item === min);
        if (index >= 0) {
            result.push(arr.splice(index, 1)[0]);
        }
        num--;
    }
    return result;
};
/** 解法四: 和解法三类似, 只是把 while 循环改成了 for 循环而已 */
var smallestK = function(arr, k) {
    if (arr.length <= 0 || k <= 0) {
        return [];
    }
    if (arr.length <= k) {
        return arr;
    }
    let result = [];
    let min = Math.min(...arr);
    let index = -1;
    for (let j = 0; j < k; j++) {
        min = Math.min(...arr);
        index = arr.findIndex(item => item === min);
        result.push(min);
        arr.splice(index, 1);
    }
    return result;
};