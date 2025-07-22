class MinStack {
    constructor() {
        this.stack = []
    }

    push(val) {
        this.stack.push(val);
    }

    pop() {
        this.stack.pop();
    }
    
    top() {
        return this.stack[this.stack.length - 1]
    }

    getMin() {
        const temp = []
        mini = this.stack[this.stack.length - 1]

        while (this.stack.length > 0) {
            mini = Math.min(mini, this.stack[this.stack.length - 1])
            temp.push(this.stack.pop())
        }

        while (temp.length > 0) {
            this.stack.push(temp.pop())
        }
        return mini
    }
}