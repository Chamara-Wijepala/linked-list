function createNode(value = null, next = null) {
  return {
    value,
    next,
  };
}

function createLinkedList() {
  let head = null;
  let length = 0;

  return {
    append(input) {
      const newNode = createNode(input);

      if (head === null) {
        head = newNode;
      } else {
        let current = head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }

      length++;
    },

    prepend(input) {
      const newNode = createNode(input, head);

      if (head === null) {
        head = newNode;
      } else {
        let prev = head;
        head = newNode;
        head.next = prev;
      }

      length++;
    },

    length() {
      return length;
    },

    getFirst() {
      return head;
    },

    getLast() {
      if (length === 0 || length === 1) {
        return head;
      } else {
        let current = head;
        while (current.next !== null) {
          current = current.next;
        }
        return current;
      }
    },

    at(index) {
      if (length === 0) {
        return head;
      } else {
        let counter = 0;
        let current = head;

        while (counter < index) {
          current = current.next;
          counter++;
        }

        return current;
      }
    },

    pop() {
      let current = head;

      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;

      length--;
    },

    contains(input) {
      let current = head;

      while (current !== null) {
        if (current.value === input) {
          return true;
        }
        current = current.next;
      }

      return false;
    },

    findIndex(input) {
      let counter = 0;
      let current = head;

      while (current !== null) {
        if (current.value === input) {
          return counter;
        }
        current = current.next;
        counter++;
      }

      return null;
    },

    toString() {
      if (length === 0) return;

      let current = head;

      while (current !== null) {
        console.log(String(current.value));
        current = current.next;
      }
    },

    insertAt(input, index) {
      if (index > length) return;
      if (index === 0) {
        this.prepend(input);
      } else {
        let counter = 0;
        let current = head;

        while (current !== null) {
          // in order to insert a node at the given index, the if statement
          // must run one node before the one at the index
          if (index === counter + 1) {
            // current is one node before the given index, so this creates a
            // new node with it's next value as the node at the given index
            const newNode = createNode(input, current.next);
            // the prevNode here is the one before the given index
            let prevNode = current;
            // now the new node is inserted at the correct index
            prevNode.next = newNode;
            length++;
            return;
          }
          current = current.next;
          counter++;
        }
      }
    },

    removeAt(index) {
      if (index === 0) {
        head = head.next;
      } else {
        const prev = this.at(index - 1);
        prev.next = prev.next.next;
      }

      length--;
    },
  };
}

const newList = createLinkedList();

newList.prepend(100);
newList.prepend(200);
newList.prepend(300);
newList.append(400);
newList.pop();
newList.insertAt("foo", 0);
newList.insertAt("bar", 1);
newList.removeAt(1);

console.log(newList);
console.log(newList.getFirst());
console.log(newList.getLast());
console.log(newList.length());
console.log(newList.at(1));
console.log(newList.contains("foo"));
console.log(newList.contains(100));
console.log(newList.contains(10));
console.log(newList.findIndex(200));
console.log(newList.findIndex(100));
console.log(newList.findIndex(10));
console.log(newList.toString());
