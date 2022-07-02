/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const f = []
var climbStairs = function (n) {
  // 处理递归边界
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  // 递归计算
  if (f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return f[n]
}
climbStairs(4)
// @lc code=end
