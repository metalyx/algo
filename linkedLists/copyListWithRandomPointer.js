/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    const map = new Map()

    map.set(null, null)

    let cur = head

    while (cur) {
        const copy = new Node(cur.val)

        map.set(cur, copy)
        cur = cur.next
    }

    cur = head

    while (cur) {
        const copy = map.get(cur)

        copy.next = map.get(cur.next)
        copy.random = map.get(cur.random)

        cur = cur.next
    }

    return map.get(head)
}
