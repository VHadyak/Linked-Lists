// Linked List class
class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  // Add a new node to the end of the list
  append(value) {
    let current;
    // If list empty, add a head
    // If not, traverse till the last node to append it
    if (this._head === null) {
      this.prepend(value);
    } else {
      current = this._head;

      // Traverse through each node
      while (current.nextNode !== null) {
        current = current.nextNode;
      }

      current.nextNode = new Node(value);

      // If last node doesn't have a neighbor, classify it as a tail node
      if (current.nextNode.nextNode === null) {
        this._tail = current.nextNode;
      }
    }
  }

  // Add a new node to the start of the list
  prepend(value) {
    let oldHead = this._head;

    // Create new head, and set old head as a nextNode of new head
    this._head = new Node(value);
    this._head.nextNode = oldHead;

    if (this._head.nextNode === null) {
      this._tail = this._head;
    }
  }

  // Get total number of nodes in the list
  size() {
    let current = this._head;
    let size = 0;

    while (current) {
      size++;
      current = current.nextNode;
    }
    return size;
  }

  head() {
    return this._head;
  }

  tail() {
    return this._tail;
  }

  // Find the node at the given index
  at(index) {
    let count = 0;
    let current = this._head;

    while (current) {
      if (index === count) {
        return current;
      }
      count++;
      current = current.nextNode;
    }

    console.error("No node found at that index!");
    return null;
  }

  // Remove last element from the list
  pop() {
    // If list empty, throw an error
    if (this._head === null) {
      console.error("Cannot delete: The list is empty!");
      return;
    }

    // If there is only one node in the list, delete it
    if (this._head.nextNode === null) {
      this._head = null;
      this._tail = null;
      return;
    }

    let prev = null;
    let current = this._head;

    while (current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = null; // Delete reference to prevNode
    this._tail = prev; // Update tail node
  }

  // Return true, if given value exists in the list
  contains(value) {
    let current = this._head;

    while (current) {
      if (value === current.value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  // Return index of the node containing value
  find(value) {
    let current = this._head;
    let index = 0;

    while (current) {
      if (value === current.value) {
        return index;
      }
      index++;
      current = current.nextNode;
    }
    console.error("Value not found!");
    return null;
  }

  // Represent LinkedList objects as strings
  toString() {
    let str = "";
    let current = this._head;

    while (current) {
      str += `( ${current.value} ) -> `; // Show all nodes
      current = current.nextNode; // Iterate until the tail node
    }
    str += null; // Display tail node's neighbor as 'null'
    return str;
  }

  // Insert a new node with the provided value at given index
  insertAt(value, index) {
    if (index < 0 || index === undefined) {
      console.error("Enter a valid index for node insertion!");
      return;
    }

    // If list is empty or given index is at 0, then insert node at the start of the list
    if (this._head === null || index === 0) {
      this.prepend(value);
      return;
    }

    let current = this._head;
    let prev = null;
    let next = null;
    let count = 0;

    while (current) {
      // If match, get currentNode before insertion point
      if (count === index - 1) {
        prev = current; // Node before the insertion point
        next = prev.nextNode; // Node after the insertion point
      }

      count++;
      current = current.nextNode; // Iterate until the last node
    }

    // If index is greater than number of nodes in the list
    if (count < index) {
      console.error("Index out of bounds!");
      return;
    }

    const newNode = new Node(value);

    prev.nextNode = newNode; // Link previous node to the new node
    newNode.nextNode = next; // Update new node's 'nextNode' link

    // If new node last in the list, make it a tail node
    if (newNode.nextNode === null) {
      this._tail = newNode;
    }
  }

  // Remove the node at the given index
  removeAt(index) {
    if (index < 0 || index === undefined) {
      console.error("Enter a valid index for node insertion!");
      return;
    }

    if (this._head === null) {
      console.error("Cannot delete: The list is empty!");
      return;
    }

    if (index === 0) {
      this._head = this._head.nextNode; // Update head to the next node if index is 0
      // If list empty, set tail node to null
      if (this._head === null) {
        this._tail = null;
      }
      return;
    }

    let current = this._head;
    let prev = null;
    let count = 0;

    while (current) {
      if (count === index) {
        // Set previous node's next to current node's next, which will remove the current node
        prev.nextNode = current.nextNode;
        // Set a tail node if the node last in the list
        if (current.nextNode === null) {
          this._tail = prev;
        }
        return;
      }

      count++;
      prev = current;
      current = current.nextNode;
    }

    console.error("Index out of bounds!");
  }
}

// Node class
class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("parrot");

//list.insertAt("Vlad", 2);
list.removeAt(2);

//console.log(list.tail());
console.log(list.toString());
