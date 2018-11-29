// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

let reverse = function(x) {
    let str = '' + x
    let arr = str.split('')
    let fushu = false
    if(arr[0] === '-'){
        arr.shift()
        fushu = true
    }
    let midRst = arr.reverse()
    let result = ""
    midRst.map( i => {
        result = result + i
    })
    if(parseInt(result)>Math.pow(2,31) - 1){
        result = 0
        return result
    }
    if(fushu){
        result = "-" + result
    }
    result = parseInt(result)
    return result
}
console.log(reverse(-345))