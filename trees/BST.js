class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

class BinarySearchTree {
    constructor(root = null) {
        if (!root) {
            this.nodeCount = 0
        } else {
            this.nodeCount = 1
        }

        this.root = root
        return this
    }

    add(val) {
        if (!this.root) {
            this.root = new TreeNode(val)
            this.nodeCount++
            return this
        }

        this._add(val, this.root, null)
        this.nodeCount++

        return this
    }

    _add(val, node) {
        if (val < node.val) {
            if (node.left) {
                this._add(val, node.left)
            } else {
                node.left = new TreeNode(val)
            }
        } else {
            if (node.right) {
                this._add(val, node.right)
            } else {
                node.right = new TreeNode(val)
            }
        }
    }

    find(val) {
        if (!this.root) {
            return [null, null]
        }

        if (val === this.root.val) {
            return [this.root, null]
        } else if (val < this.root.val) {
            return this._find(val, this.root.left, this.root)
        } else {
            return this._find(val, this.root.right, this.root)
        }
    }

    _find(val, node, prev) {
        if (!node) {
            return [null, null]
        }

        if (val === node.val) {
            return [node, prev]
        } else if (val < node.val) {
            return this._find(val, node.left, node)
        } else {
            return this._find(val, node.right, node)
        }
    }

    remove(val) {
        const [target, parent] = this.find(val)

        return this._remove(target, parent)
    }

    _remove(target, parent) {
        if (!target) {
            return false
        }

        // Target node is leave (no subtrees)
        if (!target.left && !target.right) {
            if (!parent) {
                this.root = null
                this.nodeCount = 0

                return true
            }

            if (parent.left === target) {
                parent.left = null
            } else {
                parent.right = null
            }

            this.nodeCount -= 1

            return true
        }
        // Target has only right subtree
        if (!target.left && target.right) {
            if (!parent) {
                this.root = target.right
                this.nodeCount -= 1

                return true
            }

            if (parent.left === target) {
                parent.left = target.right
            } else {
                parent.right = target.right
            }

            this.nodeCount -= 1

            return true
        }
        // Target has only left subtree
        if (target.left && !target.right) {
            if (!parent) {
                this.root = target.left
                this.nodeCount -= 1

                return true
            }

            if (parent.left === target) {
                parent.left = target.left
            } else {
                parent.right = target.left
            }

            this.nodeCount -= 1

            return true
        }
        // Target has both subtrees
        if (target.left && target.right) {
            const [successor, prev] = this.findMin(target.right, target)

            target.val = successor.val
            this._remove(successor, prev)

            return true
        }
    }

    findMin(node, prev) {
        if (node.left) {
            return this.findMin(node.left, node)
        } else {
            return [node, prev]
        }
    }

    inOrder() {
        if (!this.root) {
            return [null]
        }

        return [
            ...this._inOrder(this.root.left),
            this.root.val,
            ...this._inOrder(this.root.right),
        ]
    }

    _inOrder(node) {
        if (!node) {
            return []
        }

        return [
            ...this._inOrder(node.left),
            node.val,
            ...this._inOrder(node.right),
        ]
    }
}

const tree = new BinarySearchTree()
