function flatter(arr) {
  if (!arr.length) return
  return arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur],
    []
  )
}
const arr = [
  [1, 2],
  [3, [4, 5]]
]
console.log(flatter(arr))
