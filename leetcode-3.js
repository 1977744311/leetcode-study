
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

var lengthOfLongestSubstring = function(s) {
    var arr = s.split('');
    var longest = 0;
    var temp = [];
    arr.forEach(function(value){
        let index_of = temp.indexOf(value);
        if(index_of!=-1){//当前元素已存在
            longest = temp.length > longest ? temp.length : longest;
            for(let i = 0;i <= index_of;i++){
                temp.shift();
            }
        }
        temp.push(value);
    });
    return temp.length > longest ? temp.length : longest;
};

let a = lengthOfLongestSubstring('abcabcaa')
console.log(a)