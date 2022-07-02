// 应用题测试
// 1. 若后端返回列表 Array<{ id: number, name: string }>，前端的 Select 组件只能接受
// Array<{ value: number, label: string }> 结构，需要如何实现一个函数来转换数据？用例：
// [{ id: 0, name: "abc" }] 应当转换为 [{ value: 0, label: 'abc' }]。
// 2. 实现一个 setTimeout 的 Promise 版本 wait 函数，可以不用考虑 clearTimeout 的情况。用
// 例：
// async function() {
// await wait(1000);
// console.log('等待了 1 秒');
// }
// 3. 利用 Vue 或 React 实现一个倒计时组件，所展示的时间每秒递减。接收两个属性 time（倒
// 计时，单位：秒）和 onTime（函数），当倒计时 <= 0 时，onTime 会被调用。
// 3.1. 进一步地，在组件内部实现“暂停按钮”，点击一次，倒计时将会暂停，再点击，

const fn = (arr) => {
  let result = []
  arr.forEach((item) => {
    const obj = {}
    obj.value = item.id
    obj.label = item.name
    result.push(obj)
  })
  return result
}
const wait = async (delay = 1000) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      resolve(timer)
    }, delay)
  })
}
