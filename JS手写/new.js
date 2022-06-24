function mynew(obj, ...args) {
  // const newObj = {}
  // newObj.__proto__ = obj.prototype
  const newObj = Object.create(obj.prototype)
  const result = obj.apply(newObj, args)
  return typeof result === 'object' && result !== null ? result : newObj
}

// 测试
function a() {
  this.name = 'imber'
}
const b = mynew(a)
console.log(b.name)
