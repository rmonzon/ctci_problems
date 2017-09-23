// Problem #3.2:
// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? 
// Push, pop and min should all operate in 0(1) time.

class Stack {
  constructor() {
    this.data = [];
    this.mins = [];
    this.size = 0;
  }
  push(value) {
    this.mins.push(this.size > 0 ? Math.min(this.mins[this.size-1], value) : value);
    this.data.push(value);
    this.size++;
  }
  pop() {
    this.mins.pop();
    this.size--;
    return this.data.pop();
  }
  top() {
    return this.data[this.size - 1];
  }
  getMin() {
    return this.mins[this.size - 1];
  }
  size() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
}
let stack = new Stack();
stack.push(3);
stack.push(4);
stack.push(2);
stack.push(1);
stack.push(5);
console.log(stack.top()); // 5
console.log(stack.getMin()); // 1
console.log(stack.pop()); // 5
console.log(stack.pop()); // 1
console.log(stack.getMin()); // 2
