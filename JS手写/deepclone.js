function deepClone(obj, set = new WeakMap()) {
  // 第一步,临界条件,不是引用数据类型,或者为null的时候,则跳出递归
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  // 第二步,特殊处理
  if (obj instanceof Date) {
    return new Date(obj)
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags)
  }
  if (obj instanceof Function) {
    return function () {
      return target.apply(this, ...arguments)
    }
  }
  // map存数据防止循环引用
  if (map.has(obj)) {
    return map.get(obj)
  }
  // 利用该对象的构造器创建一个新对象
  const cloneObj = new obj.constructor()
  // 把当前克隆的对象存起来
  map.set(obj, cloneObj)
  // 遍历target自身可枚举属性
  Reflect.ownKeys(target).forEach((key) => {
    cloneObj[key] = deepClone(obj[key], map)
  })
  return cloneObj
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

Promise.resolve(1)
  .then(
    (res) => {},
    (fail) => {}
  )
  .catch((err) => {
    console.log(err)
  })
