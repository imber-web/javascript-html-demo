const arr = [1, [2, 3]]
const newArr = arr.reduce((pre, cur) => {
  // console.log(pre, cur)
  return Array.isArray(cur) ? pre.concat([...cur]) : pre.concat(cur)
}, [])
console.log(newArr)
