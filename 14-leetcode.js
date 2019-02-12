// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀， 返回空字符串 ""。

var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';

    var len = strs.reduce(function (pre, item) {
        return Math.min(pre, item.length);
    }, Number.MAX_VALUE);

    var ans = '';
    for (var i = 0; i < len; i++) {
        var a = strs[0][i];
        var f = strs.every(function (item) {
            return item[i] === a;
        });

        if (!f) break;
        ans += a;
    }

    return ans;
};