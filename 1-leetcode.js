// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的 两个 整数。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

const twoSum = (nums, target) => {
    let result = []
    nums.map( (num,index) => {
        for(let i = index+1; i<nums.length; i++){
            target === num + nums[i] ? result.push(index, i) : null 
        }
    })
    return result
}
twoSum([2, 7, 11, 15], 9)