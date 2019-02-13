// let threeSum = function (nums) {
//     let result = []
//     for (let i = 0; i < nums.length; i++) {
//         let twonums = nums.slice(i+1,nums.length)
//         twonums.map((num, index) => {
//             let threenums = twonums.slice()
//             threenums.splice(index, 1)
//             for (let j = 0; j < threenums.length; j++) {
//                 if (-nums[i] === num + threenums[j]){
//                     result.push([nums[i], num, threenums[j]])
//                 }
//             }
//         })
//     }
//     return result
// };
// try{
//     console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// }catch(e){
//     console.log(e)
// }
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let ans = []
    let len = nums.length
    // enumerate the array, and assume the item to be the smallest one
    for (let i = 0; i < len; i++) {
        // have already enumerate the item as the smallest one among the three
        // then continue
        if (i && nums[i] === nums[i - 1]) continue
        // the sum of another two should be
        let target = -nums[i]
        // the indexes of another two 
        let [start, end] = [i + 1, len - 1]
        while (start < end) {
            let sum = nums[start] + nums[end]
            if (sum > target) {
                end--
            } else if (sum < target) {
                start++
            } else {
                ans.push([nums[i], nums[start], nums[end]])
                // remove the duplication
                while (nums[start] === nums[start + 1])
                    start++
                start++
                // remove the duplication
                while (nums[end] === nums[end - 1])
                    end--
                end--
            }
        }
    }
    return ans
}
