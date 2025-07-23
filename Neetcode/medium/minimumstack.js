class MinStack {
    // constructor() {
    //     this.stack = []
    // }

    // push(val) {
    //     this.stack.push(val);
    // }

    // pop() {
    //     this.stack.pop();
    // }
    
    // top() {
    //     return this.stack[this.stack.length - 1]
    // }

    // getMin() {
    //     const temp = []
    //     mini = this.stack[this.stack.length - 1]

    //     while (this.stack.length > 0) {
    //         mini = Math.min(mini, this.stack[this.stack.length - 1])
    //         temp.push(this.stack.pop())
    //     }

    //     while (temp.length > 0) {
    //         this.stack.push(temp.pop())
    //     }
    //     return mini
    // }

    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val) {
        this.stack.push(val)
        val = Math.min(
            val, 
            this.minStack.length === 0
                ? val 
                : this.minStack[this.minStack.length - 1]
            );
        this.minStack.push(val)
    }

    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    top () {
        return this.stack[this.stack.length - 1]
    }

    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}