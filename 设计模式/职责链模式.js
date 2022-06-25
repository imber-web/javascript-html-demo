// 职责链模式的定义是：使多个对象都有机会处理请求，
// 从而避免请求的发送者和接收者之间的耦合关系，将这些对象连成一条链，
// 并沿着这条链传递该请求，直到有一个对象处理它为止。

// const order = function (orderType, pay, stock) {
// 	if (orderType === 1) { // 500 元定金购买模式
// 		if (pay === true) { // 已支付定金
// 			console.log('500 元定金预购, 得到 100 优惠券');
// 		} else { // 未支付定金，降级到普通购买模式
// 			if (stock > 0) { // 用于普通购买的手机还有库存
// 				console.log('普通购买, 无优惠券');
// 			} else {
// 				console.log('手机库存不足');
// 			}
// 		}
// 	} else if (orderType === 2) { // 200 元定金购买模式
// 		if (pay === true) {
// 			console.log('200 元定金预购, 得到 50 优惠券');
// 		} else {
// 			if (stock > 0) {
// 				console.log('普通购买, 无优惠券');
// 			} else {
// 				console.log('手机库存不足');
// 			}
// 		}
// 	} else if (orderType === 3) {
// 		if (stock > 0) {
// 			console.log('普通购买, 无优惠券');
// 		} else {
// 			console.log('手机库存不足');
// 		}
// 	}
// };

// order(1, true, 500); // 输出： 500 元定金预购, 得到 100 优惠券

// ================== 原型上加after ==================
Function.prototype.after = function (fn) {
  const self = this
  return function () {
    const ret = self.apply(this, arguments)
    if (ret === 'nextSuccessor') {
      return fn.apply(this, arguments)
    }
    return ret
  }
}

const order500yuan = () => {
  // 如果满足则返回结果，否则返回next，继续往下走
  return 'nextSuccessor'
}
const order200yuan = () => {
  return 'nextSuccessor'
}
const orderNormal = () => {
  return 'nextSuccessor'
}
const order = order500yuan.after(order200yuan).after(orderNormal)

order(1, true, 500) // 输出：500 元定金预购，得到 100 优惠券
order(2, true, 500) // 输出：200 元定金预购，得到 50 优惠券
order(1, false, 500) // 输出：普通购买，无优惠券
// 订单类型，是否支付定金，手机库存
