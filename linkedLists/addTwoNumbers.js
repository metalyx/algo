/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0

    let head = { val: -1, next: null }
    let cur = head

    while (l1 || l2 || carry) {
        let a = 0
        let b = 0
        let sum = 0

        if (l1 != null && typeof l1.val === 'number') {
            a = l1.val
            l1 = l1.next
        }

        if (l2 != null && typeof l2.val === 'number') {
            b = l2.val
            l2 = l2.next
        }

        sum = a + b + carry

        carry = 0

        if (sum > 9) {
            sum = sum - 10
            carry = 1
        }
        console.log(sum)
        cur.next = {
            val: sum,
            next: null,
        }

        if (!head) {
            head = cur
        }

        cur = cur.next
    }

    return head.next
}

const a = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
        },
    },
}

const b = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
        },
    },
}

console.log(addTwoNumbers(a, b))
