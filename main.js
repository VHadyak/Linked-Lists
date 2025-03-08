import LinkedList from "./script.js";

const list = new LinkedList();

// TEST THE LINKED LIST METHODS

list.append("dog"); // Add a new node to the end of the list
list.prepend("cat"); // Add a new node to the start of the list
list.append("parrot");
list.prepend("hamster");
list.insertAt("snake", 4); // Insert a new node with the value at the given index
list.append("turtle");

console.log("Show head node:", list.head()); // Node {value: 'hamster', nextNode: Node}
console.log("Show tail node:", list.tail()); // Node {value: 'turtle', nextNode: null}
console.log("Get total number of nodes in the list:", list.size()); // 6
console.log("Find the node at given index:", list.at(2)); // Node {value: 'dog', nextNode: Node}
console.log("Return true, if value exists in the list:", list.contains("snake")); // True
console.log("Return index of the node on the given value:", list.find("cat")); // 1
console.log("Show all the nodes in the list:", list.toString()); // ( hamster ) -> ( cat ) -> ( dog ) -> ( parrot ) -> ( snake ) -> ( turtle ) -> null

list.pop(); // Remove last node from the list
list.pop();
list.removeAt(0); // Remove the node at the given index
list.removeAt(1);

console.log("Updated head node:", list.head()); // Node {value: 'cat', nextNode: Node}
console.log("Updated tail node:", list.tail()); // Node {value: 'parrot', nextNode: null}
console.log("Show the remaining nodes:", list.toString()); // ( cat ) -> ( parrot ) -> null
