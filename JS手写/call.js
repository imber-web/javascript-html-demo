const obj = {
  name: 'imber'
}
const fn = () => {
  console.log(this.name)
}
function foo() {
  console.log(this.name)
}
fn.call(obj) //window
foo.call(obj) //imber

// expected output: "cheese"

//核心逻辑，挂载到这个context上，又从context.fn执行，那this就指向了这个context
Function.prototype.mycall = function (context) {
  // 第一步，有没有参数，有的话如果为普通数据类型转化为Object，否则为window
  context = context ? Object(context) : window
  // 第二步，参考上挂载一个fn函数 = 调用者this，这个调用者后面会使用的
  context.fn = this
  // 第三步，获取参数数组，第一个后面的都为参数，一个一个的传的
  let args = [...arguments].slice(1)
  // 第四步，执行这个挂载在context上的函数，并且传入参数得到结果
  let result = context.fn(...args)
  // 第五步，删除挂载的函数
  delete context.fn
  // 第六步 返回结果
  return result
}

Function.prototype.myapply = function (context, arr) {
  // 第一步，有没有参数，有的话如果为普通数据类型转化为Object，否则为window
  context = context ? Object(context) : window
  // 第二步，参考上挂载一个fn函数 = 调用者this，这个调用者后面会使用的
  context.fn = this
  //第三步，获取result
  let result
  // 第四步，执行这个挂载在context上的函数，并且传入参数得到结果
  if (!arr) {
    result = context.fn()
  } else {
    result = context.fn(...arr) //其实就是解构了
  }
  // 第五步，删除挂载的函数
  delete context.fn
  // 第六步 返回结果
  return result
}
