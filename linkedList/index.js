// Singly
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertAfterHead(node) {
        const next = this.head.next;

        this.head.next = node;
        node.next = next;
    }

    insertIntoBeginning(node) {
        const second = this.head;
        this.head = node;
        node.next = second;
    }

    insertLast(node) {
        let current = this.head;
        let prev = null;

        while (current) {
            prev = current;
            current = current.next;
        }

        prev.next = node;
        node.next = null;
    }

    insertAfter(node) {
        let prev = null;
        let current = this.head;
        let next = this.head.next;

        while (current) {
            if (current.data !== node.data) {
                prev = current;
                current = next;
                next = next.next;
            } else {
                current.next = node;
                node.next = next;
                return;
            }
        }

        prev.next = node;
        node.next = null;
    }

    deleteHead() {
        this.head = this.head.next;
    }
}

const node1 = new ListNode(12);
const node2 = new ListNode(6);

node1.next = node2;

const list1 = new LinkedList(node1);

const node3 = new ListNode(12);
const node4 = new ListNode(6);

node3.next = node4;

const list2 = new LinkedList(node3);

console.log(list1 === list1);
