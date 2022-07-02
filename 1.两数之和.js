/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var temp = new Map()
  for (var i = 0; i < nums.length; i++) {
    var point = temp.get(target - nums[i])
    if (point !== undefined) {
      return [point, i]
    }
    temp.set(nums[i], i)
  }
}
twoSum([3, 2, 4], 6)
// @lc code=end
