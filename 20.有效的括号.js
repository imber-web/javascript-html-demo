/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // push pop
  var stack = []
  var arr = s.split('')
  function foo(a, b) {
    if (
      (a === '(' && b === ')') ||
      (a == '[' && b === ']') ||
      (a === '{' && b === '}')
    ) {
      return true
    }
  }
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i] //当前
    var preitem = stack[stack.length - 1] //栈顶
    if (foo(preitem, item)) {
      stack.pop()
    } else {
      stack.push(item)
    }
  }
  if (stack.length > 0) return false
  return true
}
isValid('()[]{}')
// @lc code=end
