// 将一个给定字符串根据给定的行数， 以从上往下、 从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING"
// 行数为 3 时， 排列如下：

// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后， 你的输出需要从左往右逐行读取， 产生出一个新的字符串， 比如： "LCIRETOESIIGEDHN"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
// 示例 1:

//     输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2:

//     输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:

// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G

let convert = (s, numRows) => {
    let count = calCount(numRows)
    let arr = s.split('')
    if(numRows === 1){
        return s
    }
    if(arr.length === 1){
        return s
    }
    if(arr.length === 2 && numRows === 1){
        return s
    }
    let start = 0
    let sliceCount = ~~(arr.length / count) + 1
    let curArr = []
    let allCount = count
    for(let i =0;i<sliceCount;i++){
        curArr[i] = arr.slice(start, count)
        start = start + allCount
        count = count + allCount
    }
    let midRst = []
    curArr.map( i => {
        midRst.push(calArray(numRows,i))
    })
    let result = []
    for(let hang = 0;hang<numRows;hang++){
        for (let i = 0; i < midRst.length; i++) {
            midRst[i][hang].map( i => {
                if(i){
                    result.push(i)
                }
            })
        }
    }
    return result.join('')
}

function calCount(i) {
    return i + (i - 2)
}
function calArray(numRows,curArr) {
    let arrayY = new Array()
    for (let i = 0; i < numRows; i++) {
        arrayY[i] = new Array()
        for (let j = 0; j < numRows - 1; j++) {
            arrayY[i][j] = 0
        }
    }
    for (let i = 0; i < numRows; i++) {
        arrayY[i][0] = curArr[i]
    }
    let n = numRows
    let index = numRows
    for (let i = 1; i < numRows - 1; i++) {
        for (let j = n - 1 - 1; j > n - 1 - 1 - 1; j--) {
            arrayY[j][i] = curArr[index]
            index++
            n--
            break
        }
    }
    return arrayY
}
let a = convert('PAYPALISHIRING', 3)
console.log(a)