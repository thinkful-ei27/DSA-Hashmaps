class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === key) {
      this.insertFirst(item);
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.value !== key) {
      if (currNode.next === null) {
        return null;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    prevNode.next = new _Node(item, currNode);
  }

  insertAfter(item, key) {
    if (!this.head) {
      return null;
    }

    let currNode = this.head;
    let prevNode = this.head;

    while (currNode.value !== key) {
      if (currNode.next === null) {
        return null;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }

    currNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, index) {
    let counter = 0;
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      this.insertFirst(item);
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (counter !== index - 1) {
      if (currNode.next === null) {
        console.log('Index does not exist');
        break;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
        counter++;
      }
    }
    prevNode.next = new _Node(item, currNode.next);
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function displaySLL(sll) {
  console.log(JSON.stringify(sll));
}

function size(sll) {
  let counter = 1;
  let tempNode = sll.head;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
    counter++;
  }
  // console.log(counter);
  return counter;
}

function isEmpty(sll) {
  if (sll.head === null) {
    console.log('List is empty');
  } else {
    console.log('Wow a list');
  }
}

function findPrevious(sll, item) {
  if (!sll.head) {
    return null;
  }
  if (sll.head.value === item) {
    sll.insertFirst(item);
    return;
  }
  let currNode = sll.head;
  let prevNode = sll.head;
  while (currNode.value !== item) {
    if (currNode.next === null) {
      return null;
    } else {
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
  console.log(prevNode.value);
  return;
}

function findLast(sll) {
  if (sll.head === null) {
    console.log('you aint got no list');
  } else {
    let tempNode = sll.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }

    return tempNode.value;
  }
}

function findFirst(sll) {
  if (sll.head === null) {
    console.log('you aint got no list');
  } else {
    return sll.head.value;
  }
}

module.exports = {
  LinkedList,
  displaySLL,
  size,
  isEmpty,
  findPrevious,
  findLast,
  findFirst
};
