function deepClone(obj) {
  // 第一步,临界条件,不是引用数据类型,或者为null的时候,则跳出递归
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  // 第二步,定义result
  let result
  // 第三步,if/else定义result初始值为[]还是{}
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  // 第四步,for in两个都可以遍历,但是会遍历到原型对象上的属性
  for (const key in obj) {
    // 第五步,过滤原型上的属性
    if (obj.hasOwnProperty(key)) {
      // 第六步,递归,核心
      result[key] = deepClone(obj[key])
    }
  }
  // 最后放回结果
  return result
}

// ========================= 测试 =========================
const oldObj = {
  name: 'imber',
  wife: {
    name: 'pudding'
  }
}
const newObj = deepClone(oldObj)
oldObj.wife.name = 'other'
console.log(newObj) //数据不会跟着变化说明成功了
