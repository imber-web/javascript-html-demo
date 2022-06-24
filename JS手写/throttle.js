// 时间版本
function throttle(fun, time) {
  let t1 = 0 //初始时间
  return function () {
    let t2 = new Date() //当前时间
    if (t2 - t1 > time) {
      fun.apply(this, arguments)
      t1 = t2
    }
  }
}
// settimeout版本
function throttle(fn, delay = 200) {
  let timer = 0
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments) // 透传 this和参数
      timer = 0
    }, delay)
  }
}

// 区别

// 防抖： if(timer){
//   clearTimeout(timer)
// }

// 节流：if(timer){
//   return
// }
