class ListNode {
    constructor(key, val) {
        this.key = key
        this.val = val

        this.prev = null
        this.next = null

        return this
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity
    this.cache = new Map() // key maps to node

    // Left = LRU, right = most recent
    this.left = new ListNode(0, 0)
    this.right = new ListNode(0, 0)

    this.left.next = this.right
    this.right.prev = this.left
}

// remove node from the list
LRUCache.prototype.remove = function (listNode) {
    listNode.prev.next = listNode.next
    listNode.next.prev = listNode.prev
}

// insert at right
LRUCache.prototype.insert = function (listNode) {
    let prev = this.right.prev

    prev.next = listNode
    this.right.prev = listNode

    listNode.prev = prev
    listNode.next = this.right
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key))
        this.insert(this.cache.get(key))
        return this.cache.get(key).val
    }

    return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        this.remove(this.cache.get(key))
    }
    let node = new ListNode(key, value)
    this.cache.set(key, node)
    this.insert(this.cache.get(key))

    if (this.cache.size > this.capacity) {
        let LRU = this.left.next

        this.remove(LRU)
        this.cache.delete(LRU.key)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
