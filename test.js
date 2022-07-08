function Foo(age) {
  this.age = age
  setTimeout(() => {
    console.log(this.age)
    console.log(this)
  })
}
const instance = new Foo(111)
