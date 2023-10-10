/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    if (!head.next) {
        return null
    }

    let array = []

    while (head) {
        array.push(head.val)

        head = head.next
    }

    let tmp = array[k - 1]
    array[k - 1] = array[array.length - k]
    array[array.length - k] = tmp

    let dummy = { val: undefined, next: null }
    let cur = dummy

    for (let i = 0; i < array.length; i++) {
        cur.next = new ListNode(array[i])
        cur = cur.next
    }

    return dummy.next
}
