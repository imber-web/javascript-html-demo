/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  var pre = null
  var cur = head
  while (cur) {
    var nextnode = cur.next
    cur.next = pre
    pre = cur
    cur = nextnode
  }
  return pre
}
// 反转结束后，pre 就会变成新链表的头结点
// @lc code=end
