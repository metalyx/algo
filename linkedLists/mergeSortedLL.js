/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (a, b) {
    let llHead = { val: 0, next: null }
    let ll = llHead

    while (a && b) {
        if (a.val <= b.val) {
            ll.next = a
            a = a.next
        } else {
            ll.next = b
            b = b.next
        }

        ll = ll.next
    }

    if (a) {
        ll.next = a
    }

    if (b) {
        ll.next = b
    }

    return llHead.next
}

const a = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 4,
            next: null,
        },
    },
}

const b = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 4,
            next: null,
        },
    },
}

console.log(mergeTwoLists(a, b))
