// 策略模式：定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。

// 之前代码
function askPrice(tag, originPrice) {
  // 处理预热价
  if (tag === 'pre') {
    if (originPrice >= 100) {
      return originPrice - 20
    }
    return originPrice * 0.9
  }
  // 处理大促价
  if (tag === 'onSale') {
    if (originPrice >= 100) {
      return originPrice - 30
    }
    return originPrice * 0.8
  }
  // 处理返场价
  if (tag === 'back') {
    if (originPrice >= 200) {
      return originPrice - 50
    }
    return originPrice
  }
  // 处理尝鲜价
  if (tag === 'fresh') {
    return originPrice * 0.5
  }
  // 处理新人价
  if (tag === 'newUser') {
    if (originPrice >= 100) {
      return originPrice - 50
    }
    return originPrice
  }
}
// ==========第一步优化，函数抽离，抽离询价逻辑==========
// 处理预热价
function prePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 20
  }
  return originPrice * 0.9
}
// 处理大促价
function onSalePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 30
  }
  return originPrice * 0.8
}
// 处理返场价
function backPrice(originPrice) {
  if (originPrice >= 200) {
    return originPrice - 50
  }
  return originPrice
}
// 处理尝鲜价
function freshPrice(originPrice) {
  return originPrice * 0.5
}
// 总的函数入口
function askPrice(tag, originPrice) {
  // 处理预热价
  if (tag === 'pre') {
    return prePrice(originPrice)
  }
  // 处理大促价
  if (tag === 'onSale') {
    return onSalePrice(originPrice)
  }
  // 处理返场价
  if (tag === 'back') {
    return backPrice(originPrice)
  }
  // 处理尝鲜价
  if (tag === 'fresh') {
    return freshPrice(originPrice)
  }
}
// ==========第二步优化，分发优化，对象映射==========
// 定义一个询价处理器对象
const priceProcessor = {
  pre(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 20
    }
    return originPrice * 0.9
  },
  onSale(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 30
    }
    return originPrice * 0.8
  },
  back(originPrice) {
    if (originPrice >= 200) {
      return originPrice - 50
    }
    return originPrice
  },
  fresh(originPrice) {
    return originPrice * 0.5
  }
}
// 询价函数
function askPrice(tag, originPrice) {
  //把tag映射成对象的key
  return priceProcessor[tag](originPrice)
}
