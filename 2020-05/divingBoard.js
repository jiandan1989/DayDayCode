/** 解法一: 使用 while 循环代替 for 循环 */
var divingBoard = function(shorter, longer, k) {
    if (k <= 0) return [];
    if (longer === shorter) {
        return [k * shorter];
    }

    // 假设 短木板的数量等于传递的数量, 长模板等于总木板数量减去短木板数量
    let low = k;
    let high = k - low;
    const result = [];
    while (low >= 0) {
        result.push(low * shorter + longer * high);
        low--;
        high = k - low;
    }
    return result;
};


/** 解法二:  */
var divingBoard = function(shorter, longer, k) {
    if (k <= 0) return [];
    if (longer === shorter) {
        return [k * shorter];
    }
    const result = [];
    for (let low = k, high = 0; low >= 0; low--, high++) {
        result.push(low * shorter + longer * high);
    }

    return result;
};


/** 解法三: 本来想结合 Array.prototype.reduce 使用, 但出错咯, 待定 */
var divingBoard = function(shorter, longer, k) {
    if (k <= 0) return [];
    if (longer === shorter) {
        return [k * shorter];
    }
    let prevData = [];
    const result = Array(k).fill(1).reduce((prev, next, index) => {
        prevData.push(((index) * shorter) + (k - index) * longer);
        if (index === k - 1) {
            prevData.push(k * shorter);
        }
        return prevData;
    }, []);
    return result;
};