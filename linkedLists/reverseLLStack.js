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
    const stack = []

    let current = head

    while (current) {
        stack.push(current.val)
        current = current.next
    }

    let llHead
    let ll

    while (stack.length > 0) {
        const val = stack.pop()

        if (ll === undefined) {
            ll = {
                val,
                next: null,
            }

            llHead = ll
        } else {
            const next = {
                val,
                next: null,
            }

            ll.next = next
            ll = next
        }
    }

    return llHead
}

const head = {
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

console.log(reverseList(head))
/*
 */
