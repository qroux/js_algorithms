// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // const firstNode = new Node('first');

    this.head = null;
  }

  insertFirst(n) {
    this.head = new Node(n, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      counter++;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;

    while (node) {
      if (node.next) {
        node = node.next;
      } else {
        return node;
      }
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (this.head === this.getLast()) return (this.head = null);

    let previous = this.head;
    let node = previous.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }

    return null;
  }
}

module.exports = { Node, LinkedList };
