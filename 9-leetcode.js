// 判断一个整数是否是回文数。 回文数是指正序（ 从左向右） 和倒序（ 从右向左） 读都是一样的整数。
let isPalindrome = function (x) {
    let str = '' + x
    let arr = str.split('')
    if (arr[0] === '-') {
        return false
    }
    for (let i = 0; i < arr.length; i++){
        let j = arr.length - 1 - i 
        if(arr[i] !== arr[j]){
            return false
        }
    }
    return true
}
console.log(isPalindrome(-101))