// Problem #3.4:
// Implement a MyQueue class which implements a queue using two stacks.
class MyQueue {
  constructor() {
    this.stack1 = new Stack(); // makes use of an auxiliar Stack class
    this.stack2 = new Stack();
  }
  push(x) {
    this.stack1.push(x);
  }
  pop() {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    let elem = this.stack2.pop();
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
    return elem;
  }
  peek() {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    let elem = this.stack2.top();
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
    return elem;
  }
  empty() {
    return this.stack1.isEmpty();
  }
}
let queue = new MyQueue();
queue.push(3);
queue.push(4);
queue.push(5);
console.log(queue.peek()); // 3
console.log(queue.pop()); // 3
console.log(queue.peek()); // 4
