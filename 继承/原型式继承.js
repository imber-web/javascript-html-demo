// 利用一个空对象作为中介，将某个对象直接赋值给空对象构造函数的原型。
function object(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
// object()对传入其中的对象执行了一次浅复制，将构造函数F的原型直接指向传入的对象。
var person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

var anotherPerson = object(person)
anotherPerson.name = 'Greg'
anotherPerson.friends.push('Rob')

var yetAnotherPerson = object(person)
yetAnotherPerson.name = 'Linda'
yetAnotherPerson.friends.push('Barbie')

alert(person.friends) //"Shelby,Court,Van,Rob,Barbie"
// 缺点：

// 原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
// 无法传递参数
// 另外，ES5中存在Object.create()的方法，能够代替上面的object方法。
