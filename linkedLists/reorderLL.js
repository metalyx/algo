/* cSpell:disable */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head.next) {
        return
    }

    let dummy = head

    let slow = head
    let fast = head.next

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let tail = slow.next

    while (tail.next) {
        tail = tail.next
    }

    // slow.next is head of second part of the list
    reverseList(slow.next)

    // DANGER
    slow.next = null

    let l = dummy
    let r = tail

    // 1 - 2 - 3 - 4 - 5

    while (l !== r) {
        let nextl = l.next

        l.next = r
        l = nextl

        if (r !== null && l !== r) {
            let nextr = r.next

            r.next = nextl
            r = nextr
        }
    }
}

function reverseList(head) {
    let prev = null
    let cur = head

    while (cur) {
        let next = cur.next

        cur.next = prev
        prev = cur
        cur = next
    }

    return prev
}

const listShort = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null,
            },
        },
    },
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

console.log(reorderList(listShort))
