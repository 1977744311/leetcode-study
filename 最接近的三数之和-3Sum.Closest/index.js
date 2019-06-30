// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
//
// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.
//
// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
//
//     来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum-closest
//     著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 下面是双指针解法，时间复杂度为n的平方，暴力解发n的三次方
var threeSumClosest = function(nums, target) {
    let len = nums.length;
    if (len <= 2) return [];
    nums = nums.sort((a, b) => a - b);
    let min = nums[0] + nums[1] + nums[2];
    for (let x = 0; x < len - 2;) {
        for (let y = x + 1, z = len - 1; y < z;) {
            let t = nums[x] + nums[y] + nums[z];
            if (Math.abs(t - target) < Math.abs(min - target)) {
                min = t;
            }
            if (t < target) {
                do {
                    y++;
                } while(y < z && nums[y] === nums[y - 1])
            } else if (t > target) {
                do {
                    z--;
                } while(y < z && nums[z] === nums[z + 1])
            } else {
                return min;
            }
        }
        do {
            x++;
        } while (x < len - 2 && nums[x] === nums[x - 1])
    }
    return min;
};
