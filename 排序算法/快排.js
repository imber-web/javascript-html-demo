const quickSort = (arr) => {
  //第一步，临界条件
  if (arr.length < 2) {
    return arr
  }
  //第二步，左右数组
  const left = []
  const right = []
  //第三步，中心点和基准值
  const pivot = Math.floor(arr.length / 2)
  const base = arr.splice(pivot, 1)[0]
  //第四步，循环与基准值比较
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  //第五步，递归
  return quickSort(left).concat([base], quickSort(right))
}

const test = [1, 34, 5, 76, 8, 6, 9, 7, 6, 3]

console.log(quickSort(test))
