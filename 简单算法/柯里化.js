// const curry = (fn) =>
//   (judge = (...args) =>
//     args.length >= fn.length ? fn(...args) : (...arg) => judge(...args, ...arg))

// // Test
// const fn = curry(function (a, b, c) {
//   console.log([a, b, c])
// })

// function curry(fn, ...args) {
//   return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
// }

// function curry(fn, ...args) {
//   return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
// }

function add1() {
  let args = Array.prototype.slice.call(arguments)
  args.push(...arguments)
  add1.toString = function () {
    return args.reduce(function (prev, cur) {
      return prev + cur
    })
  }
  return add1
}
const result1 = add1(1)(2)(3, 4, 5)
console.log('result1:', parseInt(result1))
// 把内容的inner去除也可以
