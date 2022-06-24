const climbStairs = function (n) {
  // 处理递归边界
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  // 递归计算
  return climbStairs(n - 1) + climbStairs(n - 2)
}

// fn(5)
// fn(4) + fn(3)
// fn(3) + fn(2) + fn(2) + fn(1)
// fn(1) + fn(2) + fn(2) + fn(2) + fn(1)//8
console.log(climbStairs(5))
