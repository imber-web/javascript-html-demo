// 选择排序
function selectSort(arr) {
  // 缓存数组长度
  const len = arr.length
  // 定义 minIndex，缓存当前区间最小值的索引，注意是索引
  let minIndex
  // i 是当前排序区间的起点
  for (let i = 0; i < len - 1; i++) {
    // 初始化 minIndex 为当前区间第一个元素
    minIndex = i
    // i、j分别定义当前区间的上下界，i是左边界，j是右边界
    for (let j = i; j < len; j++) {
      // 若 j 处的数据项比当前最小值还要小，则更新最小值索引为 j
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 如果 minIndex 对应元素不是目前的头部元素，则交换两者
    if (minIndex !== i) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

// 时间复杂度  O(n^2)
console.log(selectSort([2, 1, 4, 3]))

// 归并排序
function mergeSort(arr) {
  const len = arr.length
  // 处理边界情况
  if (len <= 1) {
    return arr
  }
  // 计算分割点
  const mid = Math.floor(len / 2)
  // 递归分割左子数组，然后合并为有序数组
  const leftArr = mergeSort(arr.slice(0, mid))
  // 递归分割右子数组，然后合并为有序数组
  const rightArr = mergeSort(arr.slice(mid, len))
  // 合并左右两个有序数组
  arr = mergeArr(leftArr, rightArr)
  // 返回合并后的结果
  return arr
}

function mergeArr(arr1, arr2) {
  // 初始化两个指针，分别指向 arr1 和 arr2
  let i = 0,
    j = 0
  // 初始化结果数组
  const res = []
  // 缓存arr1的长度
  const len1 = arr1.length
  // 缓存arr2的长度
  const len2 = arr2.length
  // 合并两个子数组
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }
  // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
  if (i < len1) {
    return res.concat(arr1.slice(i))
  } else {
    return res.concat(arr2.slice(j))
  }
}
// 归并排序的时间复杂度是 O(nlog(n))
