var bar = {
  data: 'barData',
  getData: function () {
    console.log(data)
  }
}
function foo() {
  let data = 'fooData'
  return bar.getData
}
let data = 'windowData'
let getData = foo()
getData()
