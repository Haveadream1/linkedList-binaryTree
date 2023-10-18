  /* 
  Linked list
    each element is a separate object
      contains the data and a pointer 

    entry point = head
    exit point = tail

    Advantages:
      nodes can easily be removed or added
      without reorganizing the entire data
      structure

    Disadvantages:
      Search operations are slow
      Use more memory than arrays due to pointers
  */
  /*
  Example of linked list

    const list = {
        head: {
            value: 6
            next: {
                value: 10                                             
                next: {
                    value: 12
                    next: {
                        value: 3
                        next: null	
                        }
                    }
                }
            }
        }
    };
   */
  
  class Node { // Node contains 2 items: data and pointer
    constructor(data) {
      this.data = data
      this.nextNode = null
    }
  }

  class LinkedList { 
    constructor(head = null) { // if head not passed, = null
      this.head = head
      this.size = 0
    }
  }

  let node1 = new Node(2) // create 2 list nodes
  let node2 = new Node(5)
  node1.nextNode = node2 // create a pointer from n1 to n2

  let list = new LinkedList(node1) // create a linked list
  console.log(list.head.nextNode.data) // return 5


  // functions to play with
  const head = () => {
    return this.head;
  }

  const tail = () =>  {
    let currentNode = this.head
    while(currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode.data
  }

  const append = (value) => {
    let newNode = new Node(value);
    let head = this.head

    if (head === null) {
      head = newNode;
    } else {
        let currentNode = this.head;
        while (currentNode.nextNode !== null) { //  iterate to look for the last element in the list
          currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode // once next el is null add our new value
      }
    size++ // as we add a new el, we increment the length
  }

  const prepend = (value) => { // add a node at the start
    let newNode = new Node(value);
    let head = this.head
    if(head === null) {
      head == newNode
    } else {
      head.nextNode = newNode
    }
    size++
  }

  const popNode = () => { // removes the last element
    let head = this.head
    if (head === null) {
      console.log('Empty list, nothing to remove')
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode !== null) { 
        currentNode = currentNode.nextNode;
      }
      currentNode = null // iterate to the end and define the last as null
    }
    size--
  }

  const size = () => {
    return this.size
  }

  const at = (index) => { // return the node at given index
    let head = this.head
    let i = 0
    if (head.nextNode === null) {
      if (i === index) {
        return head
      }
    } else {
      let currentNode = this.head // prefer redefine to be more explicit but can use head var
      while(currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        i++
        if (i === index) {
          return currentNode
        }
      }
    }
  }

  const contains = (value) => { // return bool value if value is find
    let currentNode = this.head
    if (currentNode === value) {
      return True
    } else {
      while(currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        if (currentNode === value) {
          return true
        } else {
          return false
        }
      }
    }
  }

  const find = (value) => { // returns the index of a node
    let currentNode = this.head
    let i = 0
    if (currentNode === value) {
      return i;
    } else {
      while(currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        i++
        if (currentNode === value) {
          return i
        } else {
          return null
        }
    }
  }

  const toString = () => {
    let currentNode = this.head
    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      print(`(${currentNode}) ->`)
    }
    print('-> null');
  }

  const insertAt = (value, index) =>{

  }

  const removeAt = (index) => {
    let currentNode = this.head;
    let i = 0
    if (index == 0) {
      currentNode = null
    } else {
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode
        i++
        if (index === i) {
          currentNode == null
          break;
        }
      }
    }
  }