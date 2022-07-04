/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  const res = { char: '', length: 0 }
  const length = s.length
  if (length === 0) return res.length
  let tempLength = 0
  for (let i = 0; i < length; i++) {
    tempLength = 0
    for (let j = i; j < length; j++) {
      if (s[i] === s[j]) {
        tempLength++
      }
      if (s[i] !== s[j] || j === length - 1) {
        if (tempLength > res.length) {
          res.char = s[i]
          res.length = tempLength
        }
        if (i < length - 1) {
          i = j - 1
        }
        break
      }
    }
  }
  return res.length
}
// @lc code=end
