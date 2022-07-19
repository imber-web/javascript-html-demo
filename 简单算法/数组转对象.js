const arr = [
  ['name', 'imber'],
  ['sex', 'male'],
  ['friend', ['one', 'pudding']]
]
const result = {
  name: 'imber',
  sex: 'male',
  friend: {
    one: 'pudding'
  }
}
function foo(arr) {
  const result = {}
  if (!Array.isArray(arr[0])) {
    console.log(arr[1])
    result[arr[0]] = arr[1]
    return result
  }
  arr.forEach((ele) => {
    result[ele[0]] = Array.isArray(ele[1]) ? foo(ele[1]) : ele[1]
  })
  return result
}
console.log(foo(arr))
