/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let has = this.map.has(key)
  if (has) {
    let value = this.map.get(key)
    this.map.delete(key) //删除重新设置，会更新位置
    this.map.set(key, value)
    return this.map.get(key)
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    //存在则删除
    this.map.delete(key)
  }
  if (this.map.size == this.capacity) {
    //如果到达临界值就需要删除第一个
    const { value: key } = this.map.keys().next()
    this.map.delete(key)
  }
  this.map.set(key, value)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
let lRUCache = new LRUCache(2)
lRUCache.put(1, 1) // 缓存是 {1=1}
lRUCache.put(2, 2) // 缓存是 {1=1, 2=2}
lRUCache.get(1) // 返回 1
