const str = 'dababad'
function foo(str) {
  return str === str.split('').reverse().join('')
}

function fn(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false
    }
  }
  return true
}

foo(str)
