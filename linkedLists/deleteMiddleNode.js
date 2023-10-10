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
var deleteMiddle = function (head) {
    // 1. Find previous to middle node
    // 2. Relink to the next

    if (!head.next) {
        return null
    }

    let slow = head
    let fast = head.next

    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }

    slow.next = slow.next.next

    return head
}
// const listLong = {
//     val: 1,
//     next: {
//         val: 2,
//         next: {
//             val: 3,
//             next: {
//                 val: 4,
//                 next: {
//                     val: 5,
//                     next: null,
//                 },
//             },
//         },
//     },
// }
const listLong = {
    val: 1,
    next: {
        val: 2,
        next: null,
    },
    // {
    //     val: 2,
    //     next: {
    //         val: 3,
    //         next: {
    //             val: 4,
    //             next: {
    //                 val: 5,
    //                 next: null,
    //             },
    //         },
    //     },
    // },
}

console.log(deleteMiddle(listLong))
