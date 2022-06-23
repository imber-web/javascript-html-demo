// 左边的__proto__一直遍历,直到null,或者 === 右边prototype
function instance_of(L, R) {
  // 第一步,获取右边的prototype
  const O = R.prototype
  // 第二步,获取左边的原型
  L = L.__proto__
  // 第三步,while循环
  while (true) {
    // 第四步,临界条件,为null的时候返回false
    if (L === null) {
      return false
    }
    // 第五步,如果相等返回true
    if (L === O) {
      return true
    }
    // 第六步,去找原型的原型
    L = L.__proto__
  }
}

const arr = [1, 2]
console.log(instance_of(arr, Array))
