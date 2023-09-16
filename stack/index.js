class Stack {
    constructor() {
        this.head = null;
    }

    push(val) {
        const item = {
            value: val,
            next: this.head,
        };

        this.head = item;
    }

    pop() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    top() {
        if (!this.head) {
            return null;
        }

        return this.head;
    }

    isEmpty() {
        if (!this.head) {
            return true;
        }

        return false;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.top());
