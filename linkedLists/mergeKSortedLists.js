/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let resultDummy = { val: undefined, next: null }
    let cur = resultDummy
    let endsCounter = 0

    while (endsCounter < lists.length) {
        let min = undefined

        for (let i = 0; i < lists.length; i++) {
            if (!lists[i]) {
                continue
            }

            if (!min) {
                min = lists[i]
            } else {
                if (min.val > lists[i].val) {
                    min = lists[i]
                }
            }
        }

        if (!min) {
            return resultDummy.next
        }

        cur.next = min
        cur = cur.next

        min = min.next
        endsCounter += 1
    }

    return resultDummy.next
}
