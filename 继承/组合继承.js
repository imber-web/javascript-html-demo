// 组合上述两种方法（借用构造，原型链）就是组合继承。
// 用原型链实现对原型属性和方法的继承，
// 用借用构造函数技术来实现实例属性的继承。
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}
SuperType.prototype.sayName = function () {
  alert(this.name)
}
function SubType(name, age) {
  // 继承属性
  // 第二次调用SuperType()
  SuperType.call(this, name) //各干各的，就没有引用问题
  this.age = age
}
// 继承方法
// 构建原型链
// 第一次调用SuperType()
SubType.prototype = new SuperType()
// 重写SubType.prototype的constructor属性，指向自己的构造函数SubType
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
  alert(this.age)
}
var instance1 = new SubType('Nicholas', 29)
instance1.colors.push('black')
alert(instance1.colors) //"red,blue,green,black"
instance1.sayName() //"Nicholas";
instance1.sayAge() //29

var instance2 = new SubType('Greg', 27)
alert(instance2.colors) //"red,blue,green"
instance2.sayName() //"Greg";
instance2.sayAge() //27

// 缺点
// 第一次调用SuperType()：给SubType.prototype写入两个属性name，color。
// 第二次调用SuperType()：给instance1写入两个属性name，color。
// 实例对象instance1上的两个属性就屏蔽了其原型对象SubType.prototype的两个同名属性。
// 所以，组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法。
// 就是call产生了一份，通过prototype又有一份
