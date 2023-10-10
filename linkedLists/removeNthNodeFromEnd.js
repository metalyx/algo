/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummy = head

    if (!head.next) {
        return null
    }

    let slow = head
    let fast = head.next
    let counter = n + 1

    while (fast) {
        fast = fast.next
        counter -= 1

        if (counter <= 0) {
            slow = slow.next
        }
    }

    if (counter > 1) {
        return dummy.next
    } else {
        slow.next = slow.next.next
    }

    return dummy
}

const listLong = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
}

const testList = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: null,
        },
    },
}

console.log(removeNthFromEnd(testList, 4))
