const compose = (...funcs) => {
  return funcs.reduce((f, g) => (x) => f(g(x)))
}

const compose1 = (...funcs) => {
  return funcs.reduce((f, g) => {
    return (x) => {
      return f(g(x))
    }
  })
}

function fn1() {
  console.log(1)
}
function fn2() {
  console.log(2)
}
compose([fn1, fn2])

const compose3 = (...funcs) => {
  return funcs.reduce((f, g) => (x) => f(g(x)))
}
