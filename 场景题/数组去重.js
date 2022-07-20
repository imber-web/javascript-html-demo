const arr = [2, 3, 5, 4, 8, 5, 3, 2, 1]
// const len = arr.length
// let result = []
// for (let i = 0; i < len; i++) {
//   result.push(i)
//   if (result) {
//   }
// }
let res = arr.filter((item, index, arr) => {
  return arr.indexOf(item) === index
})
