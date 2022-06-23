var animal = {
  type: 'cat',
  allas: 'kitty',
  printFullName: function () {
    setTimeout(function () {
      const fullName = this.allas + '' + this.type
      console.log(fullName)
    }, 100)
  }
}
animal.printFullName() //undefinedundefined
